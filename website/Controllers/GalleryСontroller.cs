using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using website.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace website.Controllers
{
    public class GalleryСontroller : Controller
    {
        private readonly GalleryServices _gallery;
        public GalleryСontroller(GalleryServices gallery)
        {
            _gallery = gallery;
        }
        
    }
}
