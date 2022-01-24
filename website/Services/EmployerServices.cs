using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services
{
    public class EmployerServices : IDataServices<Employer>
    {
        public readonly IMongoCollection<Employer> _employers;
        public EmployerServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _employers = db.GetCollection<Employer>("Employer");

        }
        public void Delete(string ID) => _employers.DeleteOne(x => x.id == ID);

        
        public IEnumerable<Employer> GetAll() => _employers.Find(x=>true).ToEnumerable();


        public Employer GetByID(string Id) => _employers.Find(x => x.id == Id).FirstOrDefault();


        public void Insert(Employer obj) => _employers.InsertOne(obj);
        

        public void Update(Employer obj)
        {
            throw new NotImplementedException();
        }
        public Employer Save(Employer obj)
        {
            var empobj = _employers.Find(x => x.id == obj.id).FirstOrDefault();
            if(empobj == null)
            {
                _employers.InsertOne(obj);

            }
            else
            {
                _employers.ReplaceOne(x => x.id == obj.id, obj);
            }
            return obj;
        }
    }
}
