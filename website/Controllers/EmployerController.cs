using System;
using Microsoft.AspNetCore.Mvc;
using website.Services;

namespace website.Controllers
{
    [ApiController]
    [Route("/emloyers")]
    public class EmployerController : Controller
    {
        public readonly EmployerServices _employers;

        public EmployerController(EmployerServices employers) 
        {
            _employers = employers;

        }

        [HttpGet("/employers/all")]
        public ActionResult GetAll()
        {
            try
            {
                return Ok(_employers.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }
    }
}
