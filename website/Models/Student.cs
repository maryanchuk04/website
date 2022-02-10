using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models.PageTemplate;

namespace website.Models
{
    public class Student  
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("name")]
        public string name { get; set; }

        [BsonElement("page")]
        public string page { get; set; }
    }
}
