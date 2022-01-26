import React, { useState } from 'react'
import './Footer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Footer() {
   
   const [email,setEmail] = useState("")
   const [name,setName] = useState("")
   const [text,setText] = useState("")


   const SendClick = (e)=>{
      e.preventDefault();
      if(name.trim()!=="" && email.trim()!==""&& text.trim()!==""){
         
         axios.post("http://localhost:5000/mail/send",{
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
                           <p><span>Розташування: </span>вул.Руська,194,місто Чернівці,58000</p>
                            <p><span>Email: </span>dktcv@ukr.net</p>
                            <p><span>Телефон: </span>+38(0372) 54-81-15</p>
                        </div>
                        <form className="form_feedback" onSubmit={(i)=>SendClick(i)}>
                           <h3>Напишіть нам!</h3>
                           <input type="text"  className="element_form" placeholder="Ім`я" onChange={(i)=>setName(i.target.value)} value = {name}/>
                           <input type="email"  className="element_form" placeholder="Email" onChange={(i)=>setEmail(i.target.value)} value = {email}/>
                           <textarea name="text"  className="element_form "  placeholder="Напишіть ваш відгук" id="" cols="30" rows="6" onChange={(i)=>setText(i.target.value)} value = {text}></textarea>
                           <button type = "submit" className="btn"> Відправити</button>
                        </form>
                     </div>
                     <hr className="line_footer"/>
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
                       
                       <a href ="" class="button">
                          <div class="icon">
                             <i class="fab fa-youtube"></i>
                          </div>
                          <span>YouTube</span>
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