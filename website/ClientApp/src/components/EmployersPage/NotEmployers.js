import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import '../EmployersPage/EmployersPage.css'

function NotEmployers() {
    
    const [employers,setEmployers] = useState([])
    const [obj,setObj] = useState({})
    useEffect(()=>{
        axios.get("https://bsite.net/IvanovIvan/employerspage/not")
            .then((result)=>{
                console.log(result.data);
                setEmployers(result.data.employers);
                setObj(result.data)
            });
    },[]);



    return (  
        <div>
            <div className="employers_title">
                <h1>{obj.name}</h1>
            </div>

            <div className="container_all">
                <div className="employers">
                    {employers?.map((e,index)=>
                    <div className="emp">
                        <div className="emp_image">
                            <img src={`data:image/gif;base64,${e.image}`}  alt="" />
                        </div>
                        <div className="emp_info">
                          <h1>{e.full_name}</h1>
                          <h2>{e.posada}</h2>
                          <h2>{e.status}</h2>
                          <h2>{e.lessons}</h2>
                          <h2><span>Телефон: </span>{e.number}</h2>
                        </div>
                    </div>
                    
                    )}

    
                  
                </div>
            </div>
       </div>
    )
}

export default NotEmployers;
