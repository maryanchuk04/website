using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    
    [Route("/upload")]
    [ApiController]
    public class UploudFile : Controller
    {
        [HttpPost("/upload")]
        public  ActionResult Upload([FromForm] IFormFile file)
        {
            try
            {
                FtpWebRequest request =
                (FtpWebRequest)WebRequest.Create("ftp://chdkt.connect.cv.ua/userfiles/" + file.FileName);
                request.Credentials = new NetworkCredential("ftp_chdkt", "1qA2wS3eD");
                request.Method = WebRequestMethods.Ftp.UploadFile;

                using (Stream ftpStream = request.GetRequestStream())
                {
                    file.CopyTo(ftpStream);
                }
                return Ok("http://chkbht.cv.ua/userfiles/" + file.FileName);
            }
            catch(Exception e)
            {
                return BadRequest();
            }

            
        }

       
    }

    
}
