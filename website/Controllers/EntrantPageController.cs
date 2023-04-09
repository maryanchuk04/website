using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
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
            
            Cloudinary cloudinary = new Cloudinary(new Account(
                "dslnjjc0d",
                "467362677389699",
                "hXddhY2l6pBUuIMk4WVLI9D5B-Q"));
            var uploadParams = new RawUploadParams()
            {
                File = new FileDescription(file.FileName, file.OpenReadStream())
            };
            var uploadResult = cloudinary.Upload(uploadParams);
            var uplPath = uploadResult.Uri;
            entrantPage.pdf_link = uplPath.ToString();
            _entrantPage.Save(entrantPage);
            
            return Ok(entrantPage);
        }
    }
}
