using System;
using System.Collections.Generic;
using MongoDB.Driver;
using website.Models;

namespace website.Services
{
    public class OppServices : IDataServices<Opp>
    {
        private readonly IMongoCollection<Opp> _opp;

        public OppServices(IMongoClient client) 
        {
            var db = client.GetDatabase("College");
            _opp = db.GetCollection<Opp>("OPP");
        }

        public void Delete(string ID)
        {
            _opp.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<Opp> GetAll()
        {
            return _opp.Find(x => true).ToEnumerable();
        }

        public Opp GetByID(string Id)
        {
            return _opp.Find(x => x.id == Id).FirstOrDefault();

        }

        public void Insert(Opp obj)
        {
            _opp.InsertOne(obj);

        }

        public Opp Save(Opp obj)
        {
            if (obj != null)
            {
                _opp.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;

        }

        public void Update(Opp obj)
        {
            throw new NotImplementedException();
        }
    }
}
