import React, { useEffect, useState } from 'react';
import '../NewsPage/OneNewsPage.css'
import Header from '../Shared/Header';
import Menu from '../Shared/Menu'
import Footer from '../Shared/Footer'
import axios from 'axios';
import { useParams } from 'react-router';
function OneNewsPage() {

    const [news,setNews] = useState({});
    const {id} = useParams();
    const [date,setdate] = useState("")


    useEffect(()=>{
        console.log(id);
        axios.get(`http://www.chdct.somee.com/news/${id}`).then((result)=>{
            console.log(result.data)
            setNews({...result.data, date : result.data.date.substr(0,10)});
            console.log((result.data.date.length))
        })
    },{})

  return (  
  <div>
        <div className="container_all">
            <div className="news_page"> 
                <div className="newspage_title">
                    <h1>{news.title}</h1>
                </div>
                <div className="newspage_info">
                    <div className="short">
                        <div className="im">
                            <img src={`data:image/gif;base64,${news.image}`} alt={news.title} />
                        </div>
                        <div className="txt">
                            <div className = "short_txt">
                                <p>{news.short_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="all_text">
                        <p>{news.text}</p>
                        
                    </div>
                    <div className = "short_date">
                        <p>Дата: {news.date}</p> 
                    </div>

                </div>
            </div>
        </div>

  </div>
  );

}

export default OneNewsPage;
