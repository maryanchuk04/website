import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header class="header" >
            <div className="body_header">
                <div class="container_all">
                     <div className="mainInfo"> 
                         <div className="About_us">
                             <div className="text">
                               <img src="https://i.ibb.co/5Ftn6V6/Logo-2.png" alt="" />
                             </div>
                             <div className="image">
                                 <Link to ="/"><img src="https://i.ibb.co/MSPMDXf/Logo-1.png"/></Link>
                             </div>
                         </div>
                        
                     </div>
                 </div>
            </div>
           
        </header> 
    )
}

export default Header