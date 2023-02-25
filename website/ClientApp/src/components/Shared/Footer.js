import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const SendClick = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && text.trim() !== "") {
      axios
        .post("https://bsite.net/IvanovIvan/mail/send", {
          name: name,
          email: email,
          text: text,
        })
        .then((result) => {
          if (result.status === 200) {
            alert("Ваше повідомення успішно відправлено");
            setText("");
            setEmail("");
          } else {
            alert("Виникла помилка!");
          }

          console.log(result.data);
        });
    } else {
      alert("Помилка! Введіть будь ласка данні!");
    }
  };

  return (
    <div className="footer">
      <div className="body_footer">
        <div className="container_all">
          <div className="container_footer">
            <div className="about_footer">
              <div className="about_us">
                <h1>
                  Чернівецький фаховий коледж бізнесу та харчових технологій
                </h1>
                <p>
                  <span>Розташування: </span>вул.Руська, 194 "З", місто
                  Чернівці, 58009
                </p>
                <p>
                  <span>Email: </span>dktcv@ukr.net
                </p>
                <p>
                  <span>Телефон: </span>
                  <ul>
                    <li>
                      <p>+38 095 108 20 53</p>
                    </li>
                    <li>
                      <p>+38(0372) 54-81-15</p>
                    </li>
                    <li>
                      <p>+38(0372) 54-19-01</p>
                    </li>
                  </ul>
                </p>
              </div>

              <form className="form_feedback" onSubmit={(i) => SendClick(i)}>
                <div className="extra_form">
                  <h3>Напишіть нам!</h3>

                  <input
                    type="text"
                    className="element_form input1"
                    placeholder="Ім`я"
                    onChange={(i) => setName(i.target.value)}
                    value={name}
                  />
                  <input
                    type="email"
                    className="element_form input1"
                    placeholder="Email"
                    onChange={(i) => setEmail(i.target.value)}
                    value={email}
                  />
                  <textarea
                    name="text"
                    className="element_form textarea1"
                    placeholder="Напишіть ваш відгук"
                    id=""
                    cols="30"
                    rows="6"
                    onChange={(i) => setText(i.target.value)}
                    value={text}
                  ></textarea>
                  <button type="submit" className="btn">
                    {" "}
                    Відправити
                  </button>
                </div>
              </form>
            </div>
            <hr className="line_footer" />

            <div className="about_other">
              <div className="image_other">
                <a href="https://mon.gov.ua/ua" target="_blank">
                  {" "}
                  <img
                    src="https://designcollege.cv.ua/wp-content/uploads/2021/04/MON.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="image_other">
                <a href="http://doncv.gov.ua/" target="_blank">
                  <img
                    src=" https://designcollege.cv.ua/wp-content/uploads/2021/04/DEPARTAMENT-11.33.33.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="image_other">
                <a href="https://la-strada.org.ua/" target="_blank">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </a>
              </div>
              <div className="image_other">
                <a href="https://testportal.gov.ua/" target="_blank">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="social_links">
              <div class="wrapper">
                <a
                  href="https://www.facebook.com/profile.php?id=100028193662361"
                  class="button"
                >
                  <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/inst_chdkt/"
                  class="button"
                  target="_blank"
                >
                  <div class="icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <span>Instagram</span>
                </a>

                <a
                  target="_blank"
                  href=" https://www.google.com.ua/maps/place/Chernivets%CA%B9kyy+Derzhavnyy+Komertsiynyy+Tekhnikum/@48.282612,25.9305403,14z/data=!4m9!1m2!2m1!1z0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCx0ZbQt9C90LXRgdGDINGC0LAg0YXQsNGA0YfQvtCy0LjRhSDRgtC10YXQvdC-0LvQvtCz0ZbQuSDRh9C10YDQvdGW0LLRhtGW!3m5!1s0x473408e166f3947b:0xac6b559a0adcd319!8m2!3d48.2825498!4d25.9734184!15sCmbRhNCw0YXQvtCy0LjQuSDQutC-0LvQtdC00LYg0LHRltC30L3QtdGB0YMg0YLQsCDRhdCw0YDRh9C-0LLQuNGFINGC0LXRhdC90L7Qu9C-0LPRltC5INGH0LXRgNC90ZbQstGG0ZZaaCJm0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCx0ZbQt9C90LXRgdGDINGC0LAg0YXQsNGA0YfQvtCy0LjRhSDRgtC10YXQvdC-0LvQvtCz0ZbQuSDRh9C10YDQvdGW0LLRhtGWkgEHY29sbGVnZQ?hl=ru"
                  class="button"
                >
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
  );
}

export default Footer;
