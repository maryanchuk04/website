import React, { useState } from 'react'
import './Footer.css';
import axios from 'axios';

function Footer() {
   
   const [email,setEmail] = useState("")
   const [name,setName] = useState("")
   const [text,setText] = useState("")


   const SendClick = (e)=>{
      e.preventDefault();
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



    return (
       <div className="footer">
           <div className="body_footer">
                <div className="container_all">

                  <div className="container_footer">
                     <div className="about_footer">
                        <div className="about_us">
                           <p>Чернівецький фаховий коледж бізнесу та харчових технологій</p>
                           <p>вул.Руська,194,місто Чернівці,58000</p>
                            <p>dovira.chdkt@gmail.com</p>
                            <p>+38(03722)61914</p>
                        </div>
                        <form className="form_feedback" onSubmit={(i)=>SendClick(i)}>
                           <h3>Напишіть нам</h3>
                           <input type="text"  className="element_form" placeholder="Ім`я" onChange={(i)=>setName(i.target.value)} value = {name}/>
                           <input type="email"  className="element_form" placeholder="Email" onChange={(i)=>setEmail(i.target.value)} value = {email}/>
                           <textarea name="text"  className="element_form "  placeholder="Напишіть ваш відгук" id="" cols="30" rows="6" onChange={(i)=>setText(i.target.value)} value = {text}></textarea>
                           <button type = "submit" className="btn"> Відправити</button>
                        </form>
                     </div>
                     <hr className="line_footer"/>
                     <div className="social_links">
                       
                       
                     <div class="wrapper">
                        <div class="button">
                           <div class="icon">
                                   <i class="fab fa-facebook-f"></i>
                           </div>
                           <span>Facebook</span>
                        </div>
                      
                        <div class="button">
                          <div class="icon">
                             <i class="fab fa-instagram"></i>
                          </div>
                          <span>Instagram</span>
                       </div>
                       
                       <div class="button">
                          <div class="icon">
                             <i class="fab fa-youtube"></i>
                          </div>
                          <span>YouTube</span>
                       </div>
                    </div>
                    </div>
                  </div>
                              </div>
                         </div>
       </div>
    )
}

export default Footer