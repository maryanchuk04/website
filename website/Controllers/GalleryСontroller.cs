using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using website.Models;
using website.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace website.Controllers
{
    public class GalleryСontroller : Controller
    {
        private readonly GalleryServices _gallery;

        public GalleryСontroller(GalleryServices gallery)
        {
            _gallery = gallery;
        }

        [HttpGet("/gallery")]
        public ActionResult Get()
        {
            return Ok(_gallery.GetAll().Reverse());
        }

        [HttpPost("/gallery/add")]
        public ActionResult Add([FromForm] IFormFile file)
        {
            Gallery gallery = new Gallery();
            try
            {
                FtpWebRequest request =
                (FtpWebRequest)WebRequest.Create("ftp://chdkt.connect.cv.ua/image/gallery/" + file.FileName);
                request.Credentials = new NetworkCredential("ftp_chdkt", "1qA2wS3eD");
                request.Method = WebRequestMethods.Ftp.UploadFile;

                using (Stream ftpStream = request.GetRequestStream())
                {
                    file.CopyTo(ftpStream);
                }
                gallery.image = "http://chkbht.cv.ua/image/gallery/" + file.FileName;
                _gallery.Insert(gallery);
                return Ok(gallery);
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            
        }

        [HttpDelete("/gallery/delete/{id}")]
        public ActionResult Delete(string id)
        {
            _gallery.Delete(id);
            return Ok();
        }

        



    }
}
