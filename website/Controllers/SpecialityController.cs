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


        [HttpPost("/speciality/add/imgwithtext/{id}")]
        public ActionResult AddImageWithTextBlock(string id, [FromForm] ImgWithText imgWithText)
        {
            try
            {
                Speciality speciality = _speciality.GetByID(id);
                if (speciality.page == null)
                {
                    speciality.page = new Page();
                    if (speciality.page.imgWithTexts == null)
                    {
                        speciality.page.imgWithTexts = new List<ImgWithText>();
                        speciality.page.imgWithTexts.Add(imgWithText);

                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                    else
                    {
                        speciality.page.imgWithTexts.Add(imgWithText);
                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                }
                else
                {
                    if (speciality.page.imgWithTexts == null)
                    {
                        speciality.page.imgWithTexts = new List<ImgWithText>();
                        speciality.page.imgWithTexts.Add(imgWithText);

                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                    else
                    {
                        speciality.page.imgWithTexts.Add(imgWithText);
                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpPost("/speciality/add/titlewithlink/{id}")]
        public ActionResult AddTitlewithlink(string id, [FromBody] TitleWithLinks titleWithLink)
{
try
{
                Speciality speciality = _speciality.GetByID(id);
                if (speciality.page == null)
                {
                    speciality.page = new Page();
                    if (speciality.page.titleWithLinks == null)
                    {
                        speciality.page.titleWithLinks = new List<TitleWithLinks>();
                        speciality.page.titleWithLinks.Add(titleWithLink);

                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                    else
                    {
                        speciality.page.titleWithLinks.Add(titleWithLink);
                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                }
                else
                {
                    if (speciality.page.titleWithLinks == null)
                    {
                        speciality.page.titleWithLinks = new List<TitleWithLinks>();
                        speciality.page.titleWithLinks.Add(titleWithLink);

                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                    else
                    {
                        speciality.page.titleWithLinks.Add(titleWithLink);
                        _speciality.Save(speciality);
                        return Ok(speciality);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpDelete("/speciality/deleteimgwithtext/{id}/{block_id}")]
        public ActionResult DeleteBolockImg(string id, string block_id)
{
            Speciality speciality = _speciality.GetByID(id);
            speciality.page.imgWithTexts.Remove(speciality.page.imgWithTexts.Find(x => x.id == block_id));
_speciality.Save(speciality);
            return Ok(speciality);
        }

        [HttpDelete("/speciality/deletetitlewithlink/{id}/{block_id}")]
        public ActionResult DeleteBolockLink(string id, string block_id)
        {
            Speciality speciality = _speciality.GetByID(id);
            speciality.page.titleWithLinks.Remove(speciality.page.titleWithLinks.Find(x => x.id == block_id));
            _speciality.Save(speciality);
            return Ok(speciality);
        }

        [HttpGet("/speciality/getpage/{id}")]
        public ActionResult GetPage(string id)
        {
            Speciality speciality = _speciality.GetByID(id);
            return Ok(speciality.page);
        }

    }
}
