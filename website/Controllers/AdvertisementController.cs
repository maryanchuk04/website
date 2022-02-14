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

namespace website.Controllers
{

    [ApiController]
    [Route("/advertisement")]
    public class AdvertisementController : Controller
    {
        private readonly AdvertisementServices _advertisement;

        public AdvertisementController(AdvertisementServices advertisement)
        {
            _advertisement = advertisement;
        }

        [HttpGet("/advertisement")]
        public ActionResult GetAll() =>
            Ok(_advertisement.GetAll());

        [HttpGet("/advertisement/{id}")]
        public ActionResult Get(string id) =>
            Ok(_advertisement.GetByID(id));


        [HttpPost("/advertisement/add")]
        public ActionResult Add([FromBody] Advertisement advertisement)
        {
            try
            {

              _advertisement.Insert(advertisement);
               return  Ok("Insert Done");
            }
            catch (Exception ex)
            {
               return BadRequest(ex.Message);
            }
            
        }

        [HttpPost("/advertisement/update")]
        public ActionResult Update([FromBody] Advertisement advertisement)
        {
            _advertisement.Save(advertisement);
            return Ok(advertisement);
        }

        [HttpPost("/advertisement/upload/{id}")]
        public ActionResult UploadPhoto(string id, [FromForm] IFormFile file)
        {
            Advertisement advertisement = _advertisement.GetByID(id);
            try
            {
                FtpWebRequest request =
                (FtpWebRequest)WebRequest.Create("ftp://chdkt.connect.cv.ua/image/uvaha/" + file.FileName);
                request.Credentials = new NetworkCredential("ftp_chdkt", "1qA2wS3eD");
                request.Method = WebRequestMethods.Ftp.UploadFile;

                using (Stream ftpStream = request.GetRequestStream())
                {
                    file.CopyTo(ftpStream);
                }
                advertisement.image = "http://chdkt.connect.cv.ua/image/uvaha/" + file.FileName;
                _advertisement.Save(advertisement);
                return Ok(advertisement);
            }
            catch (Exception e)
            {
                return BadRequest();
            }

        }
    }
}
