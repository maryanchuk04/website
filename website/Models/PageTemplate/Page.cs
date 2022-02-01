using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models.PageTemplate
{
    public class Page
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("imgWithTexts")]
        public List<ImgWithText> imgWithTexts { get; set; }

        [BsonElement("titleWithLinks")]
        public List<TitleWithLinks> titleWithLinks { get; set; }


    }
}