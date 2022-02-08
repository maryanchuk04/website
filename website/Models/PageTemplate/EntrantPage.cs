using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models.PageTemplate
{
    public class EntrantPage
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string id { get; set; } =  MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("title")]
        public string title { get; set; }

        [BsonElement("pdf_link")]
        public string pdf_link { get; set; }

        [BsonElement("vuprobuvannya")]
        public string vuprobuvannya { get; set; }

        [BsonElement("documents")]
        public List<string> documents { get; set; }

        [BsonElement("image")]
        public byte[] image { get; set; }

    }

    
}
