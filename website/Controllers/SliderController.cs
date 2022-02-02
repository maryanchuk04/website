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
      
        [HttpGet("/slider/delete/{id}")]
        public ActionResult DeleteImg(string id)
        {
            _slider.Delete(id);
            return Ok("Фото видалене!");
        }

        [HttpPost("/slider/upload/")]
        public ActionResult UploadImage([FromForm] IFormFile file)
        {
            Cloudinary cloudinary = new Cloudinary(new Account(
                "dslnjjc0d",
                "467362677389699",
                "hXddhY2l6pBUuIMk4WVLI9D5B-Q"));
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(file.FileName, file.OpenReadStream())
            };
            var uploadResult = cloudinary.Upload(uploadParams);
            var uplPath = uploadResult.Uri;
            Slider slider = new Slider();
            slider.image = uplPath.ToString();
            _slider.Insert(slider);
            return Ok(slider);
        }

        
    }
}
