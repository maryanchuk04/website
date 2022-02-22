using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using website.Models;
using website.Services;

namespace website.Controllers
{
    [Route("/news")]
    [ApiController]
    public class NewsController : Controller
    {
        public readonly NewsServices _news;
        public NewsController(NewsServices newsData)
        {  
            _news = newsData;
        }

        [HttpGet("/news")]
        public ActionResult GetList()
        {
            var a = _news.GetAll().ToList();
             a.Sort((x, y) => y.date.CompareTo(x.date));
            return Ok(a);
        }

        [HttpPost("/news/add")]
        public ActionResult InsertOneNews([FromBody] News news)
        {
            _news.Insert(news);
            return Ok(news);
            
        }
        [HttpGet("/news/{id}")]
        public ActionResult<News> GetNews(string id) => Ok(_news.GetByID(id));


        [HttpGet("/news/delete/{id}")]
        public ActionResult Delete (string id)
        {
            _news.Delete(id);
            return Ok();
        }


        [HttpPost("/news/upload/{id}")]
        public ActionResult UploadPhoto(string id,[FromForm] IFormFile file)
        {
            
            News news = _news.GetByID(id);


            try
            {
                FtpWebRequest request =
                (FtpWebRequest)WebRequest.Create("ftp://chdkt.connect.cv.ua/image/news/" + file.FileName);
                request.Credentials = new NetworkCredential("ftp_chdkt", "1qA2wS3eD");
                request.Method = WebRequestMethods.Ftp.UploadFile;

                using (Stream ftpStream = request.GetRequestStream())
                {
                    file.CopyTo(ftpStream);
                }
                news.image = "http://chkbht.cv.ua/image/news/" + file.FileName;
                _news.Save(news);
                return Ok(news);
            }
            catch (Exception)
            {
                return BadRequest();
            }           
        }


        

        [HttpPost("/news/replace/")]
        public ActionResult SaveNews ( [FromBody]News news)
        {
            _news.Save(news);
            return Ok(news);
        }
       

        
      

        
        

    }
}
