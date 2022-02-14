using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace website.Models
{
    public class Gallery
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        
            
        [BsonElement("image")]
        public string image { get; set; }
     }
}
