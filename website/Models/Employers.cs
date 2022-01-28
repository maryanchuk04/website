using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Models
{
    public class Employers : IMenuElements
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

        [BsonElement("name")]
        //ім'я підрозділу таблиці меню Штаб коледжу
        public string name { get; set; }
        public List<Employers> employers { get; set; }

    }
}
 