using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace website.Models.PageTemplate
{
    public class TitleWithLinks
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();
        
        [BsonElement("title")]
        public string title { get; set; }
        [BsonElement("link")]
        public string link { get; set; }

    }
}
