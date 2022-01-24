import React from 'react';


import './OblikPage.css';
function OblikPage() {
  return (
  <div > 
      <div  className="image_speciality">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaczhpIF9QWikNfOHEz3BRU3F3W4aad6zQg&usqp=CAU" alt="" />
        <div className="title_h">
        <h3>Галузь знань 07"Управління та адміністрація"</h3>
        <h3>Спеціальність 071 "Облік і оподаткування"</h3>
        </div>
       </div>

       <div className="container_all">
       
       <div className="law_speciality">
         <p>
          Освітня програма "Облік та оподаткування" акредитована <b>відповідно до сертифікату  КД 21011180,</b> термін дії до 01.07.2099 р
          Навчальний заклад здійснює підготовку молодших спеціалістів на основі базової (9 класів) та повної (11 класів) загальної середньої освіти.
         </p>
       </div>
       <div className="about_prof">
         <p>Молодший спеціаліст підготовлений для професійної діяльності, може працювати на посадах бухгалтера, бухгалтера-ревізора, завідувача каси, касира-експерта, рахівника, інспектора з інвентаризації, інспектора-ревізора.</p>
       </div>
         <div className="spheres_speciality">
           <h5>Сфери використання молодших спеціалістів спеціальності  “Облік і оподаткування”:</h5>
           <ol>
             <li>бухгалтерський облік основних засобів, нематеріальних активів;</li>
             <li>бухгалтерський облік запасів на виробничих і торгових підприємствах;</li>
             <li>бухгалтерський облік грошових коштів, розрахункових і кредитних операцій, фінансових інвестицій;</li>
             <li>бухгалтерський облік власного капіталу;</li>
             <li>бухгалтерський облік процесу реалізації, визначення витрат, доходів і прибутку від реалізації товарів, виконаних робіт і послуг;</li>
             <li>бухгалтерський облік витрат на виробництво продукції;</li>
             <li>ревізія господарської діяльності з окремих напрямків бухгалтерської роботи.</li>
             
           </ol>
         </div>
      </div>
      
      
       
  </div>
  )
}

export default OblikPage;