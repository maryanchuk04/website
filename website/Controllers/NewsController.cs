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
        public void InsertOneNews([FromBody] News news) => _news.Insert(news);

        [HttpPost("/news/upload")]
        public string SaveFile([FromBody]FileUpload file)
        {
             News news = JsonConvert.DeserializeObject<News>(file.news);
            if(file.file.Length > 0)
            {
                using(var ms  = new MemoryStream())
                {
                    file.file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    news.image = fileBytes;
                    news = _news.Save(news);
                    if (news.id.Trim() != "")
                    {
                        return "Saved!";
                    }
                }
            }
            return "Failed!";
        }

        public byte[] GetImage(string sBase64String)
        {
            byte[] bytes = null;
            if (!string.IsNullOrEmpty(sBase64String))
            {
                bytes = Convert.FromBase64String(sBase64String);
            }
            return bytes;
        }
       

        

    }
}
