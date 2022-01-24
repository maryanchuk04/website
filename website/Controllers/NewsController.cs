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
            return Ok(_news.GetAll());
        }

        [HttpPost("/news/add")]
        public ActionResult InsertOneNews([FromBody] News news, IFormFile file)
        {
            if (file != null)
            {
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    file.OpenReadStream().CopyTo(memoryStream);
                    news.image = Convert.ToBase64String(memoryStream.ToArray());
                    
                }
                return Ok(news);
            }
            else
            {
                news.image = "";
                return Ok(news);
            }
        }
        [HttpPost("/news/upload")]
        public ActionResult UploadPhoto(IFormFile file)
        {
            News news = _news.GetByID("61df1026981ab2e50f2ecf6b");
            /*
            if (file != null)
            {
                MemoryStream memoryStream = new MemoryStream();
                
                    file.OpenReadStream().CopyTo(memoryStream);
                    news.image = Convert.ToBase64String(memoryStream.ToArray());

                
                return Ok(news);
            }
            else
            {
                news.image = "";
                return Ok(news);
            }*/
            return Ok();
            
        }

        
      

        
        

    }
}
