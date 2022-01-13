using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

    }
}
