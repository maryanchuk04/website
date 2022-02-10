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

       



    }
}
