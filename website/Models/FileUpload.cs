using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization.Attributes;

namespace website.Models
{
    public class FileUpload
    {
        
        public IFormFile file { get; set; }

        public string id { get; set; }

    }
}
