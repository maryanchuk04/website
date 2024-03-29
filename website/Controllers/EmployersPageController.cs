﻿using Microsoft.AspNetCore.Http;
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
           var k = _employersPage.GetByID(id);

            k.employers.Remove(k.employers.Find(x => x.id == employerId));
            _employersPage.Save(k);
            return Ok(k);
        }
        [HttpPost("/employerspage/update/number/{id}")]
        public ActionResult UpdateNumber(string id, [FromBody] Employers student)
        {
            var st = _employersPage.GetByID(id);

            st.number = student.number;
            _employersPage.Save(st);
            return Ok(st);
        }
        [HttpGet("/employerspage/admin")]
        public ActionResult GetAdmin()
        {
           return Ok(_employersPage.GetByID("620299ddcd09eef769827bec"));
        }
        [HttpGet("/employerspage/not")]
        public ActionResult GetAdmin2()
        {
            return Ok(_employersPage.GetByID("620299e3cd09eef769827bf3"));
        }

        [HttpGet("/employerspage/gosp")]
        public ActionResult GetAdmin3()
        {
            return Ok(_employersPage.GetByID("620299f7cd09eef769827bfc"));
        }
        [HttpGet("/employerspage/ped")]
        public ActionResult GetAdmin4()
        {
            return Ok(_employersPage.GetByID("62029a09cd09eef769827c01"));
        }










    }

}
