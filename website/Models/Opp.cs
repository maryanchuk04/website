using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace website.Models
{
    public class Opp
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("name")]
        public string name { get; set; }

        [BsonElement("link")]
        public string link { get; set; }

        [BsonElement("opp")]
        public List<string> opp { get; set; }
    }

    
}
