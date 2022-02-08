using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace website.Models.PageTemplate
{
    public class TitleWithLinks :  IPageTemplate
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("block_name")]
        public string block_name { get; set; }

        [BsonElement("title")]
        public string title { get; set; }

        [BsonElement("link")]
        public string link { get; set; }

      

    }
}
