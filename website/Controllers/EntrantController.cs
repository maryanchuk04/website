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
    [Route("/entrant")]
    [ApiController]
    public class EntrantController : ControllerBase
    {
        private readonly EntrantServices _entrants;


        public EntrantController(EntrantServices entrant)
        {
            _entrants = entrant;
        }

        [HttpGet("/entrant/")]
        public ActionResult GetAll()
        {
            return Ok(_entrants.GetAll());
        }

       
        [HttpGet("/entrant/{id}")]
        public ActionResult Get(string id)
        {
            return Ok(_entrants.GetByID(id));
        }

        
        [HttpPost("/entrant/add")]
        public ActionResult Add([FromBody] Entrant entrant)
        {
            _entrants.Insert(entrant);
            return Ok(entrant );
        }

        [HttpPost("/entrant/add/imgwithtext/{id}")]
        public ActionResult AddImageWithTextBlock(string id, [FromForm] ImgWithText imgWithText)
        {
            try
            {
                Entrant entrant = _entrants.GetByID(id);
                if (entrant.page == null)
                {
                    entrant.page = new Page();
                    if (entrant.page.imgWithTexts == null)
                    {
                        entrant.page.imgWithTexts = new List<ImgWithText>();
                        entrant.page.imgWithTexts.Add(imgWithText);

                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                    else
                    {
                        entrant.page.imgWithTexts.Add(imgWithText);
                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                }
                else
                {
                    if (entrant.page.imgWithTexts == null)
                    {
                        entrant.page.imgWithTexts = new List<ImgWithText>();
                        entrant.page.imgWithTexts.Add(imgWithText);

                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                    else
                    {
                        entrant.page.imgWithTexts.Add(imgWithText);
                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpPost("/entrant/add/titlewithlink/{id}")]
        public ActionResult AddTitlewithlink(string id, [FromBody] TitleWithLinks titleWithLink)
        {
            try
            {
                Entrant entrant = _entrants.GetByID(id);
                if (entrant.page == null)
                {
                    entrant.page = new Page();
                    if (entrant.page.titleWithLinks == null)
                    {
                        entrant.page.titleWithLinks = new List<TitleWithLinks>();
                        entrant.page.titleWithLinks.Add(titleWithLink);

                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                    else
                    {
                        entrant.page.titleWithLinks.Add(titleWithLink);
                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                }
                else
                {
                    if (entrant.page.titleWithLinks == null)
                    {
                        entrant.page.titleWithLinks = new List<TitleWithLinks>();
                        entrant.page.titleWithLinks.Add(titleWithLink);

                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                    else
                    {
                        entrant.page.titleWithLinks.Add(titleWithLink);
                        _entrants.Save(entrant);
                        return Ok(entrant);
                    }
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpDelete("/entrant/deleteimgwithtext/{id}/{block_id}")]
        public ActionResult DeleteBolockImg(string id, string block_id)
        {
            Entrant entrant = _entrants.GetByID(id);
            entrant.page.imgWithTexts.Remove(entrant.page.imgWithTexts.Find(x => x.id == block_id));
            _entrants.Save(entrant);
            return Ok(entrant);
        }

        [HttpDelete("/entrant/deletetitlewithlink/{id}/{block_id}")]
        public ActionResult DeleteBolockLink(string id, string block_id)
        {
            Entrant entrant = _entrants.GetByID(id);
            entrant.page.titleWithLinks.Remove(entrant.page.titleWithLinks.Find(x => x.id == block_id));
            _entrants.Save(entrant);
            return Ok(entrant);
        }

        [HttpGet("/entrant/getpage/{id}")]
        public ActionResult GetPage(string id)
        {
            Entrant entrant = _entrants.GetByID(id);
            return Ok(entrant.page);
        }






    }
}
