using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;

namespace website.Services
{
    public class CollegeActivityServices : IDataServices<CollegeActivity>
    {
        public readonly IMongoCollection<CollegeActivity> _collegeActivity;
        public CollegeActivityServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _collegeActivity = db.GetCollection<CollegeActivity>("CollegeActivity");
        }

        public void Delete(string ID)
        {
            _collegeActivity.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<CollegeActivity> GetAll()
        {
           return _collegeActivity.Find(x => true).ToEnumerable();

        }
        public CollegeActivity GetByID(string Id)
        {
            return _collegeActivity.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(CollegeActivity obj)
        {
            _collegeActivity.InsertOne(obj);
        }

        public CollegeActivity Save(CollegeActivity obj)
        {
            if (obj != null)
            {
                _collegeActivity.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(CollegeActivity obj)
        {
            throw new NotImplementedException();
        }
    }
}
