import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../NewsPage/NewsPage.css'
function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:5000/news").then((result)=>{
        setNews(result.data);
        console.log(result.data);
      });
  }, []);



  return (
  <div className = "container_all">
  

      <div className="news_header">

      </div>
      {news.map((n,index)=>(

      
      <div className="news_block">
        
        <div className="news_title">
          { n.title}
        </div>
        <div className="news_info">
        <img src={`data:image/gif;base64,${n.image}`}/>
       
          <div className="text_and_link">
            <h2>{n.short_text}</h2>
           <div className="link_news">
            <Link to = "/">Детальніше</Link>
            </div>
           </div>
        </div>
        <p>{n.date}</p>
      </div>  
      ))}

      
      
      
      
    </div>
  
  );
}

export default NewsPage;
