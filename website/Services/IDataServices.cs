using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services
{
    public interface IDataServices<T>
        where T : class
    {
        IEnumerable<T> GetAll();
        T GetByID(string Id);
        void Insert(T obj);
        void Delete(string ID);
        void Update(T obj);
        T Save(T obj);
    }
}
