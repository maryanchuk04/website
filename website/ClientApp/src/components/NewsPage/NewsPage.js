import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"
import axios from 'axios'
import '../NewsPage/NewsPage.css'

import Pagination from '@mui/material/Pagination';
function NewsPage() {
  
  const [news, setNews] = useState([]);
  const [pagincount,setPagincount]= useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
 
  const handleChange = (event, value) => {
    setPagincount(value);
  };
  



  useEffect(() => {
    axios.get("https://bsite.net/IvanovIvan/news").then((res)=>{
      setLoading(true);
      setLoading(false);
      setNews(res.data);
      setTotalPages(Math.ceil(res.data.length / postsPerPage));
      setPagincount(1);
    })
  }, []);

  const handleClick = num => {
    setPage(num);
  }
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  



  
    //
       
       
  return (
    <div className="newspage">
      <div className="container_all">
      <div className="news_header">
                Новини
            </div>
           
             
             {
               news?.map ((n,index)=>(
                 index>=(pagincount-1)*3 && index<(pagincount)*3 &&
                <div className="news_block">
                <div className="news_title">
                  { n.title}
                </div>
                <div className="news_info">
               <img src={n.image}/>
                 <div className="text_and_link">
                   <h2>{n.short_text}</h2>
                  <div className="link_news">
                   <Link key = {n.id} to ={`/news/${n.id}`}>Детальніше</Link>
                    </div>
                  </div>
               </div>
               
               <p>{n.date.substr(0,10)}</p>
               </div>
               ))
             }
             
               
             <Pagination count={Math.ceil(news.length/3)} value={pagincount}  onChange={handleChange} />
          </div>
      </div>
        
           
  );
}


export default NewsPage;
