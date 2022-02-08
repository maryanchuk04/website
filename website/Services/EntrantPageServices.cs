using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using website.Models.PageTemplate;

namespace website.Services
{
    public class EntrantPageServices : IDataServices<EntrantPage>
    {
        private readonly IMongoCollection<EntrantPage> _entrantpage;
        public EntrantPageServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _entrantpage = db.GetCollection<EntrantPage>("EntrantPage");
        }
        public void Delete(string ID)
        {
            _entrantpage.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<EntrantPage> GetAll()
        {
            return _entrantpage.Find(x => true).ToEnumerable();

        }

        public EntrantPage GetByID(string Id)
        {
            return _entrantpage.Find(x => x.id == Id).FirstOrDefault();

        }

        public void Insert(EntrantPage obj)
        {
            _entrantpage.InsertOne(obj);
        }

        public EntrantPage Save(EntrantPage obj)
        {
            if (obj != null)
            {
                _entrantpage.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(EntrantPage obj)
        {
            throw new NotImplementedException();
        }
    }
}
