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
                               <span>Чернівецький фаховий коледж бізнесу та харчових технологій</span>
                             </div>
                             <div className="image">
                                 <Link to ="/"><img src="https://i.ibb.co/3Fgrkkd/image.png"/></Link>
                             </div>
                         </div>
                        
                     </div>
                 </div>
            </div>
           
        </header> 
    )
}

export default Header