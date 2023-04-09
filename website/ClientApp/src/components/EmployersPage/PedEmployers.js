import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import '../EmployersPage/EmployersPage.css'

function PedEmployers() {
    const [employers,setEmployers] = useState([])
    const [obj,setObj] = useState({})
    useEffect(()=>{
        axios.get("https://bsite.net/IvanovIvan/employerspage/ped")
            .then((result)=>{
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
                            <img src={e.image}  alt="" />
                        </div>
                        <div className="emp_info">
                          <h1>{e.full_name}</h1>
                          <h2>{e.posada}</h2>
                          <h2>{e.status}</h2>
                          <h2>{e.lessons}</h2>
                          
                        </div>
                    </div>
                    
                    )}

    
                  
                </div>
            </div>
       </div>
    )
}

export default PedEmployers;
