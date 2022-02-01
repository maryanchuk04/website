using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using website.Models;
using website.Services;


namespace website.Controllers
{
    [ApiController]
    [Route("/history")]
    public class HistoryController : Controller
    {
        private readonly HistoryServices _history;

        public HistoryController(HistoryServices history)
        {
            _history = history;
        }
        
        [HttpGet("/history")]
        public ActionResult GetAll()
        {
            return Ok(_history.GetAll());
        }

        [HttpGet("/history/{id}")]
        public ActionResult GetOne(string Id)
        {
            return Ok(_history.GetByID(Id));
        }

        [HttpPost("/history/add")]
        public ActionResult Add([FromBody] History history)
        {
            try
            {
                _history.Insert(history);
                return Ok(history);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("/history/delete/{id}")]
        public ActionResult Delete(string id)
        {
            _history.Delete(id);
            return Ok();
        }


    }
}
