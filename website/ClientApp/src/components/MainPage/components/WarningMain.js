import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './WarningMain.css';
function WarningMain() {

    const [adv,setAdv] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/advertisement').then((result)=>{
            console.log(result.data);
            
            setAdv(result.data);
        })
    },[])

    return (
       <div className="div">
           
           <div className="container_all">
               {adv.map((a,index)=>(
                
                <div className="warning_block">
                 <div className="text_warning">
                    <h3><a href = {a.link} target ="_blank">{a.title} </a></h3>
                    <p>
                        {a.short_text}
                   </p>
                 </div>
                 <div className="image_warning">
                    {a.image == null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOE1GLo_CmChhIjgJqAh-9fPcxJIQBnxQeQ&usqp=CAU"alt="" />
                     : <img src={a.image} alt={a.title} />}
                 </div>
                 </div>
               ))}
            
           
           </div>
       </div>
    )
}

export default WarningMain;