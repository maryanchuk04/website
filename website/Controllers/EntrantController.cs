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
            var a = _entrants.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
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

        [HttpPost("/entrant/update/{id}")]
        public ActionResult Save(string id, [FromBody] Entrant entrant)
        {
            Entrant st = _entrants.GetByID(id);
            
            st.page = entrant.page;
            _entrants.Save(st);
            return Ok(st);
        }

        [HttpPost("/entrant/update/number/{id}")]
        public ActionResult UpdateNumber(string id, [FromBody] Entrant student)
        {
            var st = _entrants.GetByID(id);

            st.number = student.number;
            _entrants.Save(st);
            return Ok(st);
        }





    }
}
