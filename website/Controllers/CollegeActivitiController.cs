using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using website.Models.PageTemplate;
using website.Services;


namespace website.Controllers
{
    [Route("/collegeactivity")]
    [ApiController]
    public class CollegeActivitiController : ControllerBase
    {
        private readonly CollegeActivityServices _collegeActivity;
        public CollegeActivitiController(CollegeActivityServices collegeActivity)
        {
            _collegeActivity = collegeActivity;
        }

        [HttpGet("/collegeactivity/{id}")]
        public ActionResult Get(string id)
        {
            return Ok(_collegeActivity.GetByID(id));
        }

        [HttpGet("/collegeactivity")]
        public ActionResult Get()
        {
            var a = _collegeActivity.GetAll().ToList();
           a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
        }

        [HttpPost("/collegeactivity/add")]
        public ActionResult Post([FromBody] CollegeActivity college)
        {
            try
            {
                _collegeActivity.Insert(college);
                return Ok(college);
            }
            catch (Exception)
            {
                return BadRequest();

            }
        }

        [HttpDelete("/collegeactivity/delete/{id}")]
        public void Delete(string id)
        {
            _collegeActivity.Delete(id);
        }

        [HttpPost("/collegeactivity/update/{id}")]
        public ActionResult Update(string id,[FromBody] CollegeActivity college)
        {
            var c = _collegeActivity.GetByID(id);
            c.number = college.number;
            c.page = college.page;
            _collegeActivity.Save(c);
            return Ok(c);
        }


    }
}
