using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services
{
    public class Employer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        [BsonElement("full_name")]
        public string full_name { get; set; }
        [BsonElement("posada")]
        public string posada { get; set; }
        [BsonElement("status")]
        public string status { get; set; }
    }
}
