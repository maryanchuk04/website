import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './WarningMain.css';
function WarningMain() {

    const [adv,setAdv] = useState([])

    useEffect(()=>{
        axios.get('http://www.chdct.somee.com/advertisement').then((result)=>{
            console.log(result.data);
            
            setAdv(result.data);
        })
    },[])

    return (
       <div className="div">
           <div className="title_warning">
               <p>Увага, важлива інформація</p>
           </div>
           <div className="container_all">
               {adv.map((a,index)=>(
                
                <div className="warning_block">
                 <div className="text_warning">
                    <h3>{a.title}</h3>
                    <p>
                        {a.short_text}
                   </p>
                 </div>
                 <div className="image_warning">
                    {a.image == null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOE1GLo_CmChhIjgJqAh-9fPcxJIQBnxQeQ&usqp=CAU"alt="" />
                     : <img src={`data:image/gif;base64,${a.image}`} alt={a.title} />}
                 </div>
                 </div>
               ))}
            
           
           </div>
       </div>
    )
}

export default WarningMain;