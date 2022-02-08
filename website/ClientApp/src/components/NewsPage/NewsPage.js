import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import '../NewsPage/NewsPage.css'
function NewsPage() {
  const CONSTANTA = 1
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  const News = ({ news, page }) => {
    const startIndex = ( page - 1 ) * CONSTANTA;
    const selectedUsers = news?.slice(startIndex, startIndex + CONSTANTA);
    return  (
      <div>
          <div className = "container_all">
            <div className="news_header">
                Новини
            </div>
          
            {selectedUsers?.map((n,index)=>(
            <div className="news_block">
              <div className="news_title">
                { n.title}
              </div>
              <div className="news_info">
             <img src={`data:image/gif;base64,${n.image}`}/>
               <div className="text_and_link">
                 <h2>{n.short_text}</h2>
                <div className="link_news">
                 <Link key = {n.id} to ={`/news/${n.id}`}>Детальніше</Link>
                  </div>
                </div>
             </div>
             
             <p>{n.date.substr(0,10)}</p>
             </div> 
           
           ))}
           </div> 
      </div>
    )
  }
    const Pagination = ({ totalPages, handleClick }) => {
        const pages = [...Array(totalPages).keys()]?.map(num => num+1);
        return (
          <div className ="pagination">
            { pages?.map(num => (
              <button className= "pagination_button"
                key={num}
                onClick={() => handleClick(num)}
              >{num}</button>
            )) }
          </div>
        )
    }
        useEffect(() => {
          axios.get("http://localhost:5000/news").then((res)=>{
            setLoading(true);
            setLoading(false);
            setNews(res.data);
            setTotalPages(Math.ceil(res.data.length / CONSTANTA));
          })
        }, []);
      
        const handleClick = num => {
          setPage(num);
        }


  return (
    <div className="newspage">
      <div className="container_all">
         <div className = "pagination">
                {loading ? <p>Loading...</p> : <>
                  <News news={news} page={page} />
                  <Pagination totalPages={totalPages} handleClick={handleClick} />
                </> }
              </div>
          </div>
      </div>
        
           
  );
}

export default NewsPage;
