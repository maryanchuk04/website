using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using website.Services;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;


namespace website.Controllers
{

    [ApiController]
    [Route("/opp")]
    public class OppController : Controller
    {

        private readonly OppServices _opp;
        public OppController(OppServices opp)
        {
            _opp = opp;
        }

        [HttpGet("/opp")]
        public ActionResult GetAll() => Ok(_opp.GetAll());

        [HttpGet("/opp/{id}")]
        public ActionResult GetOne(string id) => Ok(_opp.GetByID(id));

        [HttpPost("/opp/add")]
        public ActionResult Ins([FromBody] Opp opp)
        {
            _opp.Insert(opp);
            return Ok(opp);
        }

        [HttpPost("/opp/update/{id}")]
        public ActionResult Update(string id,[FromBody] Opp opp)
        {

            
            Opp st = _opp.GetByID(id);
            st.name = opp.name;
            st.link = opp.link;
            st.opp = opp.opp;
            _opp.Save(st);
            return Ok(st);
           
        }





    }
}
