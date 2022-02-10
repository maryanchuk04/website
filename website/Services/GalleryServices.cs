using System;
using System.Collections.Generic;
using MongoDB.Driver;
using website.Models;

namespace website.Services
{
    public class GalleryServices : IDataServices<Gallery>
    {
        private readonly IMongoCollection<Gallery> _gallery;
        public GalleryServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _gallery = db.GetCollection<Gallery>("Gallery");
        }

        public void Delete(string ID)
        {
            _gallery.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<Gallery> GetAll()
        {
            return _gallery.Find(x => true).ToEnumerable();
        }

        public Gallery GetByID(string Id)
        {
            return _gallery.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(Gallery obj)
        {
            _gallery.InsertOne(obj);
        }

        public Gallery Save(Gallery obj)
        {
            if (obj != null)
            {
                _gallery.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(Gallery obj)
        {
            throw new NotImplementedException();
        }
    }
}
