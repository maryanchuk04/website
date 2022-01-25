using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website
{
    public class News
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("title")]
        public string title { get; set; }

        [BsonElement("short_text")]
        public string short_text { get; set; }

        [BsonElement("text")]
        public string text { get; set; }

        [BsonElement("image")]
        public byte[] image { get; set; }

        [BsonElement("date")]
        public DateTime date { get; set; } = DateTime.Now.Date;
    }
}
