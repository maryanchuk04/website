
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Services;

namespace website.Controllers
{
    [ApiController]
    [Route("/mail")]
    public class MailController : Controller
    {
        public readonly MailService mailService;
        public MailController(MailService service)
        {
            mailService = service;

        }
        [HttpPost("/mail/send")]
        public ActionResult Send([FromBody] Mail mail)
        {
            try
            {
                mailService.SendMessage(mail.name, mail.email, mail.text);
                return Ok(mail);
            }
            catch (Exception e)
            {
                return BadRequest("Виникла помилка при відправці вашого повідомлення! Спробуйте пізніше!");
            }
           
        }
    }
    public class Mail
    {
        public string name { get; set; }

        public string email { get; set; }

        public string text { get; set; }
    }
}
