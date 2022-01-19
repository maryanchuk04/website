import React from 'react'
import './Footer.css';
function Footer() {
    return (
       <div className="footer">
           <div className="body_footer">
                <div className="container_all">
                    <div className="container_header">
                    <div className="social_links">
							<div class="wrapper">
								<div class="button">
									<div class="icon">
										<a
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-facebook-f"></i>
										</a>
									</div>
									<a
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer">
										<span class="icon_btn">Facebook</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://twitter.com/"
											target="_blank "
											rel="noreferrer">
											{" "}
											<i class="fab fa-twitter"></i>
										</a>
									</div>
									<a
										href="https://twitter.com/"
										target="_blank "
										rel="noreferrer">
										<span>Twitter</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-instagram"></i>
										</a>
									</div>
									<a
										href="https://www.instagram.com/"
										target="_blank"
										rel="noreferrer">
										<span>Instagram</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://web.telegram.org/z/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-telegram"></i>
										</a>
									</div>
									<a
										href="https://web.telegram.org/z/"
										target="_blank"
										rel="noreferrer">
										<span>Telegram</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://www.youtube.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-youtube"></i>
										</a>
									</div>
									<a
										href="https://www.youtube.com/"
										target="_blank"
										rel="noreferrer">
										<span>YouTube</span>
									</a>
								</div>
								<div class="button">
									<div class="icon">
										<a
											href="https://github.com/"
											target="_blank"
											rel="noreferrer">
											<i class="fab fa-github"></i>
										</a>
									</div>
									<a
										href="https://github.com/"
										target="_blank"
										rel="noreferrer">
										<span>GitHub</span>
									</a>
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