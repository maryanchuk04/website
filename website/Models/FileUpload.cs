using System;
using Microsoft.AspNetCore.Http;

namespace website.Models
{
    public class FileUpload
    {
        public IFormFile file { get; set; }

        public string news { get; set; }

    }
}
