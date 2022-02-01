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
        public ActionResult  Get(string  id )
        {
            return Ok(_collegeActivity.GetByID(id));
        }
       
        [HttpGet("/collegeactivity")]
        public ActionResult Get()
        {
            return Ok( _collegeActivity.GetAll());
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

        [HttpPost("/collegeactivity/add/imgwithtext/{id}")]
        public ActionResult AddImageWithTextBlock(string id, [FromForm] ImgWithText imgWithText)
        {
            try
            {
                CollegeActivity collegeActivity = _collegeActivity.GetByID(id);
                if (collegeActivity.page == null)
                {
                    collegeActivity.page = new Page();
                    if (collegeActivity.page.imgWithTexts == null)
                    {
                        collegeActivity.page.imgWithTexts = new List<ImgWithText>();
                        collegeActivity.page.imgWithTexts.Add(imgWithText);

                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                    else
                    {
                        collegeActivity.page.imgWithTexts.Add(imgWithText);
                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                }
                else
                {
                    if (collegeActivity.page.imgWithTexts == null)
                    {
                        collegeActivity.page.imgWithTexts = new List<ImgWithText>();
                        collegeActivity.page.imgWithTexts.Add(imgWithText);

                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                    else
                    {
                        collegeActivity.page.imgWithTexts.Add(imgWithText);
                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpPost("/collegeactivity/add/titlewithlink/{id}")]
        public ActionResult AddTitlewithlink(string id, [FromBody] TitleWithLinks titleWithLink)
        {
            try
            {
                CollegeActivity collegeActivity = _collegeActivity.GetByID(id);
                if (collegeActivity.page == null)
                {
                    collegeActivity.page = new Page();
                    if (collegeActivity.page.titleWithLinks == null)
                    {
                        collegeActivity.page.titleWithLinks = new List<TitleWithLinks>();
                        collegeActivity.page.titleWithLinks.Add(titleWithLink);

                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                    else
                    {
                        collegeActivity.page.titleWithLinks.Add(titleWithLink);
                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                }
                else
                {
                    if (collegeActivity.page.titleWithLinks == null)
                    {
                        collegeActivity.page.titleWithLinks = new List<TitleWithLinks>();
                        collegeActivity.page.titleWithLinks.Add(titleWithLink);

                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                    else
                    {
                        collegeActivity.page.titleWithLinks.Add(titleWithLink);
                        _collegeActivity.Save(collegeActivity);
                        return Ok(collegeActivity);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpDelete("/collegeactivity/deleteimgwithtext/{id}/{block_id}")]
        public ActionResult DeleteBolockImg(string id, string block_id)
        {
            CollegeActivity collegeActivity = _collegeActivity.GetByID(id);

            collegeActivity.page.imgWithTexts
                .Remove(collegeActivity.page.imgWithTexts.Find(x => x.id == block_id));
            
            _collegeActivity.Save(collegeActivity);

            return Ok(collegeActivity);
        }

        [HttpDelete("/collegeactivity/deletetitlewithlink/{id}/{block_id}")]
        public ActionResult DeleteBolockLink(string id, string block_id)
        {
            CollegeActivity collegeActivity = _collegeActivity.GetByID(id);

            collegeActivity.page.titleWithLinks
                .Remove(collegeActivity.page.titleWithLinks.Find(x => x.id == block_id));
            
            _collegeActivity.Save(collegeActivity);

            return Ok(collegeActivity);
        }
    }
}
