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
        public ActionResult AddImageWithTextBlock(string id, [FromBody]ImgWithText imgWithText)
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

        [HttpPost("/student/upload/imgwithtext/{id}/{block_id}")]
        public ActionResult Upload(string id,string block_id,[FromForm] IFormFile file)
        {
            Student student = _student.GetByID(id);
            ImgWithText img = student.page.imgWithTexts.Find(x => x.id == block_id);
            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    img.image = fileBytes;

                }
            }
            student.page.imgWithTexts.Remove(student.page.imgWithTexts.Find(x => x.id == block_id));
            student.page.imgWithTexts.Add(img);
            _student.Save(student);
            return Ok(student);
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



        [HttpPost("/student/uploud/page/{id}")]
        public ActionResult UploadImage(string id, [FromForm] IFormFile file)
        {
            Page page = _student.GetByID(id).page;

            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    page.image = fileBytes;
                    
                }
            }
            Student s = _student.GetByID(id);
            s.page = page;
            _student.Save(s);
            return Ok(_student.GetByID(id));
        }

        



    }
}
