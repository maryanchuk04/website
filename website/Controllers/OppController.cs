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
    public class OppController
    {

        private readonly OppServices _opp;
        public OppController(OppServices opp)
        {
            _opp = opp;
        }

        [HttpGet("/opp")]
        public ActionResult GetAll() => Ok();

        
    }
}
