using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models.PageTemplate;
using website.Models;
using website.Services;

namespace website.Controllers
{
    [Route("/speciality")]
    [ApiController]
    public class SpecialityController : ControllerBase
    {
        private readonly SpecialityServices _speciality;
        public SpecialityController(SpecialityServices specialitySevices)
        {
            _speciality = specialitySevices;
        }

        [HttpGet("/speciality")]
        public ActionResult GetAll()
        {
            var a = _speciality.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
        }


        [HttpGet("/speciality/{id}")]
        public ActionResult Get(string id) => Ok(_speciality.GetByID(id));

        [HttpDelete("/speciality/delete/{id}")]
        public ActionResult Delete(string id)
        {
            _speciality.Delete(id);
            return Ok("Об'єкт видалено!");
        }

        [HttpPost("/speciality/update/{id}")]
        public ActionResult Update(string id, [FromBody] Speciality student)
        {
            Speciality st = _speciality.GetByID(id);
            
            st.page = student.page;
            _speciality.Save(st);
            return Ok(st);
        }
        [HttpPost("/speciality/update/number/{id}")]
        public ActionResult UpdateNumber(string id, [FromBody] Speciality student)
        {
            var st = _speciality.GetByID(id);

            st.number = student.number;
            _speciality.Save(st);
            return Ok(st);
        }
    } 
}
