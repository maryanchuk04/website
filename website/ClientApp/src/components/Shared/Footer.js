import React from 'react'
import './Footer.css';

function Footer() {
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
                        <div className="form_feedback">
                           <h3>Напишіть нам</h3>
                           <input type="email"  className="element_form" placeholder="Email"/>
                           <textarea name="text"  className="element_form"  placeholder="Напишіть ваш відгук" id="" cols="30" rows="6"></textarea>
                           <button className="btn"> Відправити</button>
                        </div>
                     </div>
                     <div className="social_links">
                        <hr className="line_footer"/>
                        <div className="menu_footer">
                        <nav className="one">
                                   <ul className="topmenu topmenu1">
                                       <li>Новини</li>
                                       <li>Досягнення</li>
                                       <li>Студенту</li>
                                       <li>Абітурієнту</li>
                                       <li >Спеціальності</li>
                                       <li>Історія</li>
                                       <li>Адміністрація</li>
                                   </ul>
                               </nav>
                        </div>
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