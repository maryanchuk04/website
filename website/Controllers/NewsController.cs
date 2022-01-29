using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
            return Ok(_news.GetAll().Reverse());
        }

        [HttpPost("/news/add")]
        public ActionResult InsertOneNews([FromBody] News news)
        {
            _news.Insert(news);

            return Ok(news);
            
        }
        [HttpGet("/news/{id}")]
        public ActionResult<News> GetNews(string id) => Ok(_news.GetByID(id));


        [HttpPost("/news/upload/{id}")]
        public ActionResult UploadPhoto(string id,[FromForm] IFormFile file)
        {
            
            News news = _news.GetByID(id);

            if(file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    news.image = fileBytes;
                    _news.Save(news);
                }
            }
            return Ok(news);
            
        }


        public byte[] GetImage (string sBase64String)
        {
            byte[] bytes = null;
            if (!string.IsNullOrEmpty(sBase64String))
            {
                bytes = Convert.FromBase64String(sBase64String);
            }
            return bytes;
        }

        [HttpPost("/news/replace/")]
        public ActionResult SaveNews ( [FromBody]News news)
        {
            _news.Save(news);
            return Ok(news);
        }
       

        
      

        
        

    }
}
