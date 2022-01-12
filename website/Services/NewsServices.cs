using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services
{
    public class NewsServices : IDataServices<News>
    {
        public readonly IMongoCollection<News> _news;
        public NewsServices(IMongoClient client)
        {
            var db = client.GetDatabase("College");
            _news = db.GetCollection<News>("News");

        }

        public void Delete(string ID)  => _news.DeleteOne(x => x.id == ID);


        public IEnumerable<News> GetAll() => _news.Find(x => true).ToEnumerable();


        public News GetByID(string Id) => _news.Find(x => x.id == Id).FirstOrDefault();


        public void Insert(News obj) => _news.InsertOne(obj);
      
        public void Update(News obj)
        {
            throw new NotImplementedException();
        }
    }
}
