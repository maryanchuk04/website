using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
namespace website.Models.PageTemplate
{
    public interface IPageTemplate
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }  

        public string block_name { get; set; }

        public string title { get; set; }

    }
}
