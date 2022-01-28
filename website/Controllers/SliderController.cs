using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
        public ActionResult AddSlider([FromBody] Slider slider)
        {
            _slider.Insert(slider);
            return Ok("Додали нове фото в слайдер!");
        }

        [HttpGet("/slider/delete/{id}")]
        public ActionResult DeleteImg(string id)
        {
            _slider.Delete(id);
            return Ok("Фото видалене!");

        }
    }
}
