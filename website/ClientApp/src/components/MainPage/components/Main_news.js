import React, { useEffect,useState } from 'react'
import './Main_news.css';
import axios from 'axios';
function Main_news() {

  const [news, setNews] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:5000/news").then((result)=>{
        setNews(result.data);
        console.log(result.data);
      });
  }, []);
  /*
  {news.map((n, index)=>index < 6 && (
    <div className="grid_news">
        <div className="info_news">
              <h3>{n.title}</h3>
               <div className="imagen"><img  src={`data:image/gif;base64,${n.image}`} alt={n.title} /></div>
              <p>{n.short_text}</p>
      </div>
    </div>
  ))}

*/

    return (
      <div className="main_news">
        
              <div className="container_all">
              <div className="grid_news">
              {
              news.map((n, index)=>index < 6 && (
                
                <div className="info_news">
                      
                        <div>
                          <h3>{n.title}</h3>
                          <div className="imagen">
                            <img src={`data:image/gif;base64,${n.image}`} alt={n.title} />
                          </div>
                        <p>{n.short_text}</p>
                        </div>
                        </div>
               
                      ))
                      
              }
                 </div>
              </div>
          </div>
        
    )
}

export default Main_news