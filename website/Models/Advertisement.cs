using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models
{
    public class Advertisement 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("title")]
        public string title { get ; set ; }

        [BsonElement("short_text")]
        public string short_text { get; set; }

        [BsonElement("image")]
        public byte[] image { get; set; }
    }
}
