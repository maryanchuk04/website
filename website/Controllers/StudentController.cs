using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using website.Models;
using website.Services;

namespace website.Controllers
{
    [Route("/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentServices _student;

        public StudentController(StudentServices student)
        {
            _student = student;
        }

        [HttpGet("/student/")]
        public IEnumerable<Student> Get()
        {
            return _student.GetAll();
        }

        
        [HttpGet("/student/{id}")]
        public ActionResult Get(string  id)
        {
            return Ok(_student.GetByID(id));
        }


        [HttpPost("/student/add")]
        public void Post([FromBody] Student student)
        {
            _student.Insert(student);
        }




        [HttpDelete("/student/delete/{id}")]
        public void Delete(string id)
        {
            _student.Delete(id);
        }
    }
}
