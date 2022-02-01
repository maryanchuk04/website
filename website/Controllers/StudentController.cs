using System;
using System.Collections.Generic;
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

        [HttpPost("/student/add/imgwithtext/{id}")]
        public ActionResult AddImageWithTextBlock(string id, [FromForm]ImgWithText imgWithText)
        {
            try
            {
                Student student = _student.GetByID(id);
                if (student.page == null)
                {
                    student.page = new Page();
                    if (student.page.imgWithTexts == null)
                    {
                        student.page.imgWithTexts = new List<ImgWithText>();
                        student.page.imgWithTexts.Add(imgWithText);

                        _student.Save(student);
                        return Ok(student);
                    }
                    else
                    {
                        student.page.imgWithTexts.Add(imgWithText);
                        _student.Save(student);
                        return Ok(student);
                    }
                }
                else
                {
                    if (student.page.imgWithTexts == null)
                    {
                        student.page.imgWithTexts = new List<ImgWithText>();
                        student.page.imgWithTexts.Add(imgWithText);

                        _student.Save(student);
                        return Ok(student);
                    }
                    else
                    {
                        student.page.imgWithTexts.Add(imgWithText);
                        _student.Save(student);
                        return Ok(student);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
            
        }

        [HttpPost("/student/add/titlewithlink/{id}")]
        public ActionResult AddTitlewithlink(string id, [FromBody] TitleWithLinks titleWithLink)
        {
            try
            {
                Student student = _student.GetByID(id);
                if (student.page == null)
                {
                    student.page = new Page();
                    if (student.page.titleWithLinks == null)
                    {
                        student.page.titleWithLinks = new List<TitleWithLinks>();
                        student.page.titleWithLinks.Add(titleWithLink);

                        _student.Save(student);
                        return Ok(student);
                    }
                    else
                    {
                        student.page.titleWithLinks.Add(titleWithLink);
                        _student.Save(student);
                        return Ok(student);
                    }
                }
                else
                {
                    if (student.page.titleWithLinks == null)
                    {
                        student.page.titleWithLinks = new List<TitleWithLinks>();
                        student.page.titleWithLinks.Add(titleWithLink);

                        _student.Save(student);
                        return Ok(student);
                    }
                    else
                    {
                        student.page.titleWithLinks.Add(titleWithLink);
                        _student.Save(student);
                        return Ok(student);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
           
        }

        [HttpDelete("/student/deleteimgwithtext/{id}/{block_id}")]
        public ActionResult DeleteBolockImg(string id, string block_id)
        {
            Student student = _student.GetByID(id);     
            student.page.imgWithTexts.Remove(student.page.imgWithTexts.Find(x => x.id == block_id));
            _student.Save(student);
            return Ok(student);
        }

        [HttpDelete("/student/deletetitlewithlink/{id}/{block_id}")]
        public ActionResult DeleteBolockLink(string id, string block_id)
        {
            Student student = _student.GetByID(id);
            student.page.titleWithLinks.Remove(student.page.titleWithLinks.Find(x => x.id == block_id));
            _student.Save(student);
            return Ok(student);
        }

        [HttpGet("/student/getpage/{id}")]
        public ActionResult GetPage(string id)
        {
            Student student = _student.GetByID(id);
            return Ok(student.page);
        }

        [HttpGet("/student/secmenu")]
        public ActionResult GetSecound()
        {
            List<string> NameSecMenu = new List<string>();
            foreach (var item in _student.GetAll())
            {
                NameSecMenu.Add(item.name);
            }
            return Ok(NameSecMenu);
        } 



    }
}
