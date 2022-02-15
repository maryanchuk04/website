using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using website.Models;
using website.Models.PageTemplate;
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

        [HttpGet("/student")]
        public ActionResult Get()
        {
            var a = _student.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
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

        [HttpPost("/student/update/{id}")]
        public ActionResult Update(string id, [FromBody] Student student)
        { 
            Student st =  _student.GetByID(id);
            st.page = student.page;
            _student.Save(st);
            return Ok(st);
        }

        [HttpPost("/student/update/number/{id}")]
        public ActionResult UpdateNumber(string id, [FromBody] Student student)
        {
            Student st = _student.GetByID(id);
            
            st.number = student.number;
            _student.Save(st);
            return Ok(st);
        }




    }
}
