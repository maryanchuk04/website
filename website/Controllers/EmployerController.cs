using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using website.Services;

namespace website.Controllers
{
    [ApiController]
    [Route("/emloyers")]
    public class EmployerController : Controller
    {
        public readonly EmployerServices _employers;

        public EmployerController(EmployerServices employers) 
        {
            _employers = employers;
        }

        [HttpGet("/employers/all")]
        public ActionResult GetAll()
        {
            try
            {
                return Ok(_employers.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        [HttpPost("/employers/add")]
        public ActionResult InsertOneNews([FromBody] Employer employer)
        {
            _employers.Insert(employer);

            return Ok(employer);

        }
        [HttpPost("/employers/upload/{id}")]
        public ActionResult UploadPhoto(string id, [FromForm] IFormFile file)
        {

            Employer employer = _employers.GetByID(id);


            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    employer.image = fileBytes;
                    _employers.Save(employer);
                }
            }
            return Ok(employer);

        }
    }
}
