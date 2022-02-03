using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;

namespace website.Services
{
    public class SpecialityServices : IDataServices<Speciality>
    {
        private readonly IMongoCollection<Speciality> _speciality;
        public SpecialityServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _speciality = db.GetCollection<Speciality>("Speciality");
        }

        public void Delete(string ID)
        {
            _speciality.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<Speciality> GetAll()
        {
            return _speciality.Find(x => true).ToEnumerable();
        }

        public Speciality GetByID(string Id)
        {
            return _speciality.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(Speciality obj)
        {
            _speciality.InsertOne(obj);
        }

        public Speciality Save(Speciality obj)
        {
            if (obj != null)
            {
                _speciality.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(Speciality obj)
        {
            throw new NotImplementedException();
        }
    }
}
