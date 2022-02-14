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
using System.Net;

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
        public ActionResult GetAll()
        {
            var a = _slider.GetAll().ToList();
            a.Sort((x, y) => x.number.CompareTo(y.number));
            return Ok(a);
        }



        [HttpGet("/slider/{id}")]
        public ActionResult GetOne(string id) => Ok(_slider.GetByID(id));
      
        [HttpGet("/slider/delete/{id}")]
        public ActionResult DeleteImg(string id)
        {
            _slider.Delete(id);
            return Ok(_slider);
           
        }

        [HttpPost("/slider/upload/")]
        public ActionResult UploadImage([FromForm] IFormFile file)
        {
            try
            {
                FtpWebRequest request =
                (FtpWebRequest)WebRequest.Create("ftp://chdkt.connect.cv.ua/image/sliderimage/" + file.FileName);
                request.Credentials = new NetworkCredential("ftp_chdkt", "1qA2wS3eD");
                request.Method = WebRequestMethods.Ftp.UploadFile;

                using (Stream ftpStream = request.GetRequestStream())
                {
                    file.CopyTo(ftpStream);
                }
                Slider slider = new Slider();
                slider.image = "http://chdkt.connect.cv.ua/image/sliderimage/" + file.FileName;
                _slider.Insert(slider);
                return Ok(slider);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPost("/slider/save/{id}")]
        public ActionResult Save(string id,[FromBody] Number number)
        {
            Slider s = _slider.GetByID(id);
            s.number = Int32.Parse(number.number);
            _slider.Save(s);
            return Ok(s);
        }
        


        
    }
  
}
