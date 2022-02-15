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

            var a = _employersPage.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
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
        public ActionResult AddEmployer(string id, [FromBody] Employer employer)
        {
            var k =  _employersPage.GetByID(id);
            try
            {

                if (k.employers != null)
                {
                    k.employers.Add(employer);
                    _employersPage.Save(k);
                    return Ok(employer);
                }
                else
                {
                    k.employers = new List<Employer>();
                    k.employers.Add(employer);
                    _employersPage.Save(k);
                    return Ok(k);
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

        
             
           
           
        


        
    }

}
