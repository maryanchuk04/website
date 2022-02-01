using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using website.Services;

namespace website.Controllers
{
    [ApiController]
    [Route("/slider")]
    public class SliderController : Controller
    {

        private readonly SliderServices _slider;

        public SliderController(SliderServices services)
        {
            _slider = services;
        }

        [HttpGet("/slider/all")]
        public ActionResult GetAll() => Ok(_slider.GetAll());


        [HttpGet("/slider/{id}")]
        public ActionResult GetOne(string id) => Ok(_slider.GetByID(id));

        [HttpPost("/slider/add")]
        public ActionResult AddSlider([FromForm] IFormFile file)
        {
            Slider slider = new Slider();
            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    slider.image = fileBytes;
                    _slider.Save(slider);
                }
            }
            
            _slider.Insert(slider);
            return Ok(slider);
        }

        [HttpGet("/slider/delete/{id}")]
        public ActionResult DeleteImg(string id)
        {
            _slider.Delete(id);
            return Ok("Фото видалене!");
        }

        [HttpPost("/slider/upload/{id}")]
        public ActionResult UploadPhoto(string id, [FromForm] IFormFile file)
        {

            Slider slider = _slider.GetByID(id);

            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();

                    slider.image = fileBytes;
                    _slider.Save(slider);
                }
            }
            return Ok(slider);

        }


    }
}
