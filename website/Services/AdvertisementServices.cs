using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;
using MongoDB.Driver;

namespace website.Services
{
    public class AdvertisementServices : IDataServices<Advertisement>
    {
        private readonly IMongoCollection<Advertisement> _advertisement;

        public AdvertisementServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _advertisement = db.GetCollection<Advertisement>("Advertisement");
        }
        public void Delete(string ID) =>
            _advertisement.DeleteOne(x => x.id == ID);


        public IEnumerable<Advertisement> GetAll() => _advertisement.Find(x => true).ToEnumerable();

        public Advertisement GetByID(string Id) 
            => _advertisement.Find(x => x.id == Id).FirstOrDefault();



        public void Insert(Advertisement obj) 
            => _advertisement.InsertOne(obj);


        public Advertisement Save(Advertisement obj)
        {
            _advertisement.FindOneAndReplace(x => x.id == obj.id, obj);
            return obj;
        }


        public void Update(Advertisement obj)
        {

        }
        
    }
}
