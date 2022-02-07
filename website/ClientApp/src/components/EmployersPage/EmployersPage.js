import React, { useEffect, useState } from 'react'
import Header from "../Shared/Header";
import Menu from "../Shared/Menu";
import './EmployersPage.css';
import axios from 'axios'

function EmployersPage() {
    const [employers,setEmployers] = useState([])
    
    useEffect(()=>{
        axios.get("http://www.chdct.somee.com/employers/all")
            .then((result)=>{
                console.log(result.data);
                setEmployers(result.data);
            });
    },[]);



    return (  
        <div>
            <div className="employers_title">
                <h1>Адміністрація Коледжу</h1>
            </div>

            <div className="container_all">
                <div className="employers">
                    {employers.map((e,index)=>
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

export default EmployersPage
