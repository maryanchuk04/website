using System;
using System.Collections.Generic;
using MongoDB.Driver;
using website.Models;

namespace website.Services
{
    public class EntrantServices : IDataServices<Entrant>
    {
        private readonly IMongoCollection<Entrant> _entrants;

        public EntrantServices(IMongoClient client) 
        {
            var db = client.GetDatabase("College");
            _entrants = db.GetCollection<Entrant>("Entrant");

        }

        public void Delete(string ID)
        {
            _entrants.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<Entrant> GetAll()
        {
            return _entrants.Find(x => true).ToEnumerable();

        }

        public Entrant GetByID(string Id)
        {
           return _entrants.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(Entrant obj)
        {
            _entrants.InsertOne(obj);
        }

        public Entrant Save(Entrant obj)
        {
            if (obj != null)
            {
                _entrants.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(Entrant obj)
        {
            throw new NotImplementedException();
        }
    }
}
