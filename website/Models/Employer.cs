using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models
{
    public class Employer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();
        [BsonElement("full_name")]
        public string full_name { get; set; }

        [BsonElement("posada")]
        public string posada { get; set; }

        [BsonElement("status")]
        public string status { get; set; }

        [BsonElement("number")]
        public string number { get; set; }

        [BsonElement("lesson")]
        public string lesson { get; set; }

        [BsonElement("image")]
        public byte[] image { get; set; }

        [BsonElement("rang")]
        public string rang { get; set; }
    }
}
