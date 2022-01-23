import React from 'react';
import Header from "/Users/vovaromanyuck/Desktop/website/website/ClientApp/src/components/Shared/Header";
import Menu from "/Users/vovaromanyuck/Desktop/website/website/ClientApp/src/components/Shared/Menu";

import './CookingPage.css';
function CookingPage() {
  return (
  <div > 
      <Header/>
      <Menu/>
      <div className="title_cooking">
        <h3>Харчові технології</h3>
      </div>
      <div className="container_all">
       <div className="image_cookies">
         <img src="https://www.azolifesciences.com/image.axd?picture=2020%2F7%2Fshutterstock_1401540137.jpg" alt="" />
       </div>
      </div>
  </div>
  )
}

export default CookingPage;
