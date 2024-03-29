﻿using System;
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
            var a = _history.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
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


        [HttpPost("/history/update/{id}")]
        public ActionResult Update(string id, [FromBody] History history)
        {
            History st = _history.GetByID(id);
            
            st.page = history.page;
            st.name = history.name;
            _history.Save(st);
            return Ok(st);
        }

        [HttpPost("/history/update/number/{id}")]
        public ActionResult UpdateNumber(string id, [FromBody] History student)
        {
            var st = _history.GetByID(id);

            st.number = student.number;
            _history.Save(st);
            return Ok(st);
        }


    }
}
