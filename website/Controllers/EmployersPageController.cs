using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using website.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace website.Controllers
{
    [Route("/employerspage/")]
    [ApiController]
    public class EmployersPageController : ControllerBase
    {
        private readonly EmployersPageServices _employersPage;
        private readonly EmployerServices _employer;

        public EmployersPageController(EmployersPageServices employersPage, EmployerServices employer)
        {
            _employersPage = employersPage;
            _employer = employer;
        }
        [HttpGet("/employerspage")]
        public ActionResult GetAll ()
        {
            return Ok(_employersPage.GetAll());
        }

       
        [HttpGet("/employerspage/{id}")]
        public ActionResult Get(string  id)
        {
            return Ok(_employersPage.GetByID(id));
        }

        
        [HttpPost("/employerspage/add")]
        public ActionResult Add([FromBody] Employers employers)
        {
            _employersPage.Insert(employers);
            return Ok(employers);
        }
       
        
        [HttpDelete("/employerspage/delete/{id}")]
        public void Delete(string id)
        {
            _employersPage.Delete(id);
        }
        

        [HttpPost("/employerspage/addemployer/{id}")]
        public ActionResult AddEmployer(string id, [FromForm] Employer employer)
        {
            try
            {

                if (_employersPage.GetByID(id).employers != null)
                {
                    _employersPage.GetByID(id).employers.Add(employer);
                    return Ok(employer);
                }
                else
                {
                    _employersPage.GetByID(id).employers = new List<Employer>();
                    _employersPage.GetByID(id).employers.Add(employer);
                    return Ok(employer);
                }

            }
            catch (Exception)
            {
                return BadRequest();
            }
            
        }

        [HttpDelete("/employerspage/deleteemployer/{id}/{employerId}")]
        public ActionResult DeleteEmployer(string id,string employerId)
        {
            _employersPage.GetByID(id).employers.Remove(_employersPage.GetByID(id).employers.Find(x => x.id == employerId));
            _employersPage.Save(_employersPage.GetByID(id));
            return Ok(_employersPage.GetByID(id));
        }


        [HttpPost("/employerspage/employer/upload/{id}/{employerId}")]
        public ActionResult UploadImage(string id, string employerId,[FromForm] IFormFile file)
        {
            Employer employer = _employersPage.GetByID(id).employers.Find(x => x.id == employerId);
             if (file.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        file.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        employer.image = fileBytes;
                        _employersPage.GetByID(id).employers.Remove(_employersPage.GetByID(id).employers.Find(x => x.id == employerId));
                        _employersPage.GetByID(id).employers.Add(employer);
                        _employersPage.Save(_employersPage.GetByID(id));
                    }
                    return Ok(employer);
                }
                else
                {
                    return BadRequest();
                }
            
           
           
        }



        [HttpGet("/employerspage/admin")]
        public ActionResult Geniy()
        {
        
            return Ok(_employersPage.GetByID("620299ddcd09eef769827bec"));

        }

        [HttpGet("/employerspage/ped")]
        public ActionResult Geniy2()
        {
           
            return Ok(_employersPage.GetByID("62029a09cd09eef769827c01"));

        }
        [HttpGet("/employerspage/gosp")]
        public ActionResult Geniy3()
        {
            return Ok(_employersPage.GetByID("620299f7cd09eef769827bfc"));

        }
        [HttpGet("/employerspage/not")]
        public ActionResult Geniy4()
        { 
            return Ok(_employersPage.GetByID("620299e3cd09eef769827bf3"));

        }


       /*
        [HttpPost("/employers/upload/{id}/{id_e}")]
        public ActionResult Upload(string id, string id_e,[FromForm] IFormFile file)
        {
            Employers emp = _employersPage.GetByID(id);


            emp.employers.Find(x=>x.id == id_e).image = 
            return Ok();

        }*/

    }

}
