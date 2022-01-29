using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models.PageTemplate
{
    public abstract class PageElement
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }  = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("title_page")]
        public string title_page { get; set; }

        [BsonElement("blocks")]
        public Object[] blocks;

    }
}
