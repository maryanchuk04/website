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
        public ActionResult GetAll() => Ok(_speciality.GetAll());

        [HttpGet("/speciality/{id}")]
        public ActionResult Get(string id) => Ok(_speciality.GetByID(id));

        [HttpDelete("/speciality/delete/{id}")]
        public ActionResult Delete(string id)
        {
            _speciality.Delete(id);
            return Ok("Об'єкт видалено!");
        }


    } 
}
