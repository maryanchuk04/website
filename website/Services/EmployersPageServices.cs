using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;

namespace website.Services
{
    public class EmployersPageServices : IDataServices<Employers>
    {
        private readonly IMongoCollection<Employers> _employersPage;

        public EmployersPageServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _employersPage = db.GetCollection<Employers>("EmployersPage");
        }
        public IEnumerable<Employers> GetAll()
        {
            return _employersPage.Find(x => true).ToEnumerable();
        }

        public Employers GetByID(string Id)
        {
            return _employersPage.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(Employers obj)
        {
            _employersPage.InsertOne(obj);
        }

        public void Delete(string ID)
        {
            _employersPage.FindOneAndDelete(x => x.id == ID);
        }

        public void Update(Employers obj)
        {
            throw new NotImplementedException();
        }

        public Employers Save(Employers obj)
        {
            if (obj != null)
            {
                _employersPage.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

       
    }
}
