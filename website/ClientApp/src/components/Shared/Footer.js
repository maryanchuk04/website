import React, { useState } from 'react'
import './Footer.css';
import axios from 'axios';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Footer() {
   const [email,setEmail] = useState("")
   const [name,setName] = useState("")
   const [text,setText] = useState("")


   const SendClick = (e)=>{
      e.preventDefault();
      if(name.trim()!=="" && email.trim()!==""&& text.trim()!==""){
         
         axios.post("https://bsite.net/IvanovIvan/mail/send",{
            name: name,
            email : email,
            text: text
         }).then((result)=>{
            if(result.status===200 )
            {
               alert('Ваше повідомення успішно відправлено');
               setText("");
               setEmail("");
            }
            else {
               alert('Виникла помилка!')
            }
            
            console.log(result.data);
   
         })
      }
      else{
         alert('Помилка! Введіть будь ласка данні!');
      }
      
   }



    return (
       <div className="footer">
           <div className="body_footer">
                <div className="container_all">

                  <div className="container_footer">
                     <div className="about_footer">
                        <div className="about_us">
                           <h1>Чернівецький фаховий коледж бізнесу та харчових технологій</h1>
                           <p><span>Розташування: </span>вул.Руська, 194 "З", місто Чернівці, 58009</p>
                            <p><span>Email: </span>dktcv@ukr.net</p>
                            <p><span>Телефон: </span>+38(0372) 54-81-15</p>
                        </div>
                        
                        <form className="form_feedback" onSubmit={(i)=>SendClick(i)}>
                        <div className="extra_form">
                           <h3>Напишіть нам!</h3>
                           
                           <input type="text"  className="element_form input1" placeholder="Ім`я" onChange={(i)=>setName(i.target.value)} value = {name}/>
                           <input type="email"  className="element_form input1" placeholder="Email" onChange={(i)=>setEmail(i.target.value)} value = {email}/>
                           <textarea name="text"  className="element_form textarea1"  placeholder="Напишіть ваш відгук" id="" cols="30" rows="6" onChange={(i)=>setText(i.target.value)} value = {text}></textarea>
                           <button type = "submit" className="btn"> Відправити</button>
                           </div>
                        </form>
                       
                     </div>
                     <hr className="line_footer"/>

                     <div className="about_other">
                     
                        <div className="image_other">
                           <a href="https://mon.gov.ua/ua"> <img src="https://designcollege.cv.ua/wp-content/uploads/2021/04/MON.png" alt="" /></a>
                        </div>
                        <div className="image_other">
                        <a href="http://doncv.gov.ua/"><img src=" https://designcollege.cv.ua/wp-content/uploads/2021/04/DEPARTAMENT-11.33.33.png" alt="" /></a>
                        </div>
                        <div className="image_other">
                        <a href="https://vstup.osvita.ua/"><img src="https://designcollege.cv.ua/wp-content/uploads/2021/04/KONKURS.png" alt="" /></a>
                        </div>
                        <div className="image_other">
                        <a href="https://nmc-vfpo.com/"><img src="https://designcollege.cv.ua/wp-content/uploads/2021/04/TSENTR-kopyya.png" alt="" /></a>
                        </div>
                       
                     </div>
                     <div className="social_links">
                       
                     <div class="wrapper">
                        <a href ="https://www.facebook.com/profile.php?id=100028193662361" class="button">
                           <div class="icon">
                                   <i class="fab fa-facebook-f"></i>
                           </div>
                           <span>Facebook</span>
                        </a>
                      
                        <a href ="https://www.facebook.com/profile.php?id=100028193662361" class="button" target ="_blank">
                          <div class="icon">
                             <i class="fab fa-instagram"></i>
                          </div>
                          <span>Instagram</span>
                       </a>
                       
                       <a target="_blank" href =" https://www.google.com.ua/maps/place/Chernivets%CA%B9kyy+Derzhavnyy+Komertsiynyy+Tekhnikum/@48.282612,25.9305403,14z/data=!4m9!1m2!2m1!1z0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCx0ZbQt9C90LXRgdGDINGC0LAg0YXQsNGA0YfQvtCy0LjRhSDRgtC10YXQvdC-0LvQvtCz0ZbQuSDRh9C10YDQvdGW0LLRhtGW!3m5!1s0x473408e166f3947b:0xac6b559a0adcd319!8m2!3d48.2825498!4d25.9734184!15sCmbRhNCw0YXQvtCy0LjQuSDQutC-0LvQtdC00LYg0LHRltC30L3QtdGB0YMg0YLQsCDRhdCw0YDRh9C-0LLQuNGFINGC0LXRhdC90L7Qu9C-0LPRltC5INGH0LXRgNC90ZbQstGG0ZZaaCJm0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCx0ZbQt9C90LXRgdGDINGC0LAg0YXQsNGA0YfQvtCy0LjRhSDRgtC10YXQvdC-0LvQvtCz0ZbQuSDRh9C10YDQvdGW0LLRhtGWkgEHY29sbGVnZQ?hl=ru" class="button">
                          <div class="icon">
                          <i class="fas fa-map-marked-alt"></i>
                          </div>
                          <span>Ми на карті</span>
                       </a>
                    </div>
                    </div>
                  </div>
                              </div>
                         </div>
       </div>
    )
}

export default Footer