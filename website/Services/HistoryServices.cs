using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;

namespace website.Services
{
    public class HistoryServices : IDataServices<History>
    {
        private readonly IMongoCollection<History> _history;

        public HistoryServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _history = db.GetCollection<History>("History");
        }
        public void Delete(string ID)
        {
            _history.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<History> GetAll()
        {
            return _history.Find(x => true).ToEnumerable();
        }

        public History GetByID(string Id)
        {
            return _history.Find(x => x.id == Id).FirstOrDefault();

        }

        public void Insert(History obj)
        {
            _history.InsertOne(obj);
        }

        public History Save(History obj)
        {
            if (obj != null)
            {
                _history.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(History obj)
        {
            throw new NotImplementedException();
        }
    }
}
