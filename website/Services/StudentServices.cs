using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using website.Models;

namespace website.Services
{
    public class StudentServices : IDataServices<Student>
    {
        private readonly IMongoCollection<Student> _student;
        private ILogger<SliderServices> logger;

        public StudentServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _student = db.GetCollection<Student>("Student");
        }

        public void Delete(string ID)
        {
            _student.FindOneAndDelete(x => x.id == ID);
        }

        public IEnumerable<Student> GetAll()
        {
            return _student.Find(x => true).ToEnumerable();
        }

        public Student GetByID(string Id)
        {
            return _student.Find(x => x.id == Id).FirstOrDefault();
        }

        public void Insert(Student obj)
        {
            try
            {
                _student.InsertOne(obj);
            }
            catch(Exception e) {
                logger.LogInformation(e.Message);

            }

        }

        public Student Save(Student obj)
        {
            if (obj != null)
            {
                _student.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;
        }

        public void Update(Student obj)
        {
            throw new NotImplementedException();
        }
    }
}
