using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using website.Models.PageTemplate;
using website.Services;

namespace website.Controllers
{
    [Route("/entrantpage")]
    [ApiController]
    public class EntrantPageController : ControllerBase
    {
        private readonly EntrantPageServices _entrantPage;

        public EntrantPageController(EntrantPageServices entrantPage)
        {
            _entrantPage = entrantPage;   
        }

        [HttpGet("/entrantpage")]
        public ActionResult GetAll() => Ok(_entrantPage.GetAll());

        [HttpGet("/entrantpage/{id}")]
        public ActionResult GetAll(string id) => Ok(_entrantPage.GetByID(id));

        [HttpPost("/entrantpage/add")]
        public ActionResult Add([FromBody] EntrantPage entrantPage)
        {
            _entrantPage.Insert(entrantPage);

            return Ok(entrantPage);
        }

        [HttpPost("/entrantpage/upload/image/{id}")]
        public ActionResult AddImage(string id,[FromForm] IFormFile file)
        {
            EntrantPage entrantPage = _entrantPage.GetByID(id);

            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    entrantPage.image = fileBytes;
                    _entrantPage.Save(entrantPage);
                }
            }
            return Ok(entrantPage);
        }
        [HttpPost("/entrantpage/upload/pdf/{id}")]
        public ActionResult AddPdf(string id, [FromForm] IFormFile file)
        {
            EntrantPage entrantPage = _entrantPage.GetByID(id);

            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    entrantPage.pdf_link = fileBytes;
                    _entrantPage.Save(entrantPage);
                }
            }
            return Ok(entrantPage);
        }

        [HttpPost("/entrantpage/upload/documents/{id}")]
        public ActionResult AddDocuments(string id, [FromBody] Documents documents)
        {
            EntrantPage entrantPage = _entrantPage.GetByID(id);
            if (entrantPage.document == null)
            {
                entrantPage.document = new Documents();
                entrantPage.document.documents = documents.documents;
                _entrantPage.Save(entrantPage);
                return Ok(entrantPage);
            }
            else return BadRequest();
           

        }




    }
}
