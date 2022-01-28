using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using website.Models;

namespace website.Services
{
    public class SliderServices : IDataServices<Models.Slider>
    {
        private ILogger<SliderServices> logger;
        private readonly IMongoCollection<Slider> _slider;

        public SliderServices(IMongoClient mongoClient, ILogger<SliderServices> DPlogger)
        {
            var db = mongoClient.GetDatabase("College");
            _slider = db.GetCollection<Slider>("Slider");
            logger = DPlogger;
        }
        public void Delete(string ID) => _slider.FindOneAndDelete(x => x.id == ID);


        public IEnumerable<Slider> GetAll() => _slider.Find(x => true).ToEnumerable();


        public Slider GetByID(string Id) => _slider.Find(x => x.id == Id).FirstOrDefault();
        

        public void Insert(Slider obj)
        {
            try
            {
                _slider.InsertOne(obj);
            }
            catch(Exception e)
            {
                logger.LogInformation(e.Message);
            }
        }

        public Slider Save(Slider obj)
        {
            if (obj != null)
            {
                _slider.ReplaceOne(x => x.id == obj.id, obj);
                return obj;
            }
            else return null;

        }

        public void Update(Slider obj)
        {
            throw new NotImplementedException();
        }
    }
}
