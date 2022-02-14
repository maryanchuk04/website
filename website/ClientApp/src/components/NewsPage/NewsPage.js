import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import '../NewsPage/NewsPage.css'
function NewsPage() {
  
  const [news, setNews] = useState([]);
  
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    axios.get("https://bsite.net/IvanovIvan/news").then((res)=>{
      setLoading(true);
      setLoading(false);
      setNews(res.data);
      setTotalPages(Math.ceil(res.data.length / postsPerPage));
    })
  }, []);

  const handleClick = num => {
    setPage(num);
  }
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  const News = ({ news, page }) => {
    const startIndex = ( page - 1 ) * postsPerPage;
    const selectedUsers = news?.slice(startIndex, startIndex + postsPerPage);
    return  (
      <div>   
            <div className="news_header">
                Новини
            </div>
          
            {selectedUsers?.map((n,index)=>(
              currentPage == 1 ? ( index < 3 * currentPage && 
            (<div className="news_block">
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
             </div> ) ):(
               index >= 3 * (currentPage - 1) && index < 3 *currentPage && (
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
               )
             )
           
           ))}
           </div> 
     
    )
  }




  const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)}  className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
    //
       
       
  return (
    <div className="newspage">
      <div className="container_all">

        
                {loading ? <p>Loading...</p> : <>
                  <News news={news} page={page} />
                  <div className = "pagination">
                  <Pagination totalPages={totalPages} handleClick={handleClick} 

            

                  postsPerPage={postsPerPage}
                  totalPosts={news.length}
                  paginate={paginate}

                  />
                  </div>
                </> }
            
          </div>
      </div>
        
           
  );
}


export default NewsPage;
