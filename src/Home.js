import React from "react";
import "./Home.css";
import Product from "./Product";
<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>
function Home() {
  return (
    
    <div className="home">
      <div className="home_black_version">
        <header className="header_area header_black">
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="social_icone">
                    <ul>
                      <li><a href="#"><i  className="ion-social-facebook"></i></a></li>
                      <li><a href="#"><i  className="ion-social-twitter"></i></a></li>
                      <li><a href="#"><i  className="ion-social-instagram"></i></a></li>
                      <li><a href="#"><i  className="ion-social-linkedin"></i></a></li>
                      <li><a href="#"><i  className="ion-social-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </header>
      </div>
      
      <div className="home__container">
        <img
          className="home__image"
          //src="homeimage.png"
          src="haar.png"
          alt=""
        />
       
      <section className="banner_section banner_black">
      <div className="container">
          <div className="row">
      <table>
        
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#"><img src="bg-1.jpg" alt="lets try"/></a>
                  <div className="banner_content">
                    <p>new design</p>
                    <h2>Small design Rings</h2>
                    <span>Sale 20%</span>
                  </div>
                </div>
              </div>
            </div>

          </td>
          <td>
            <div className="col-lg-4 col-md-6">
                  <div className="single_banner">
                    <div className="banner_thumb">
                      <a href="#"><img src="bg-2.jpg" alt="lets try"/></a>
                      <div className="banner_content">
                        <p>Bestselling Rings</p>
                        <h2>White gold Rings</h2>
                        <span>Sale 10%</span>
                      </div>
                    </div>
                  </div>
                </div>

          </td>
          <td>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#"><img src="bg-3.jpg" alt="lets try"/></a>
                  <div className="banner_content">
                    <p>Featured Rings</p>
                    <h2>Platinum Rings</h2>
                    <span>Sale 30%</span>
                  </div>
                </div>
              </div>
            </div>

          </td>
          <td>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#"><img src="bg-3.jpg" alt="lets try"/></a>
                  <div className="banner_content">
                    <p>Featured Rings</p>
                    <h2>Platinum Rings</h2>
                    <span>Sale 30%</span>
                  </div>
                </div>
              </div>
            </div>

          </td>
          <td>
            

          </td>

        </tr>
      </table>
      </div>
      </div>
      </section>
{/*        
      <section className="banner_section banner_black">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#"><img src="bg-1.jpg" alt="lets try"/></a>
                  <div className="banner_content">
                    <p>new design</p>
                    <h2>Small design Rings</h2>
                    <span>Sale 20%</span>
                  </div>
                </div>
              </div>
            </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single_banner">
                    <div className="banner_thumb">
                      <a href="#"><img src="bg-2.jpg" alt="lets try" /></a>
                      <div className="banner_content">
                        <p>Bestselling Rings</p>
                        <h2>White gold Rings</h2>
                        <span>Sale 10%</span>
                      </div>
                    </div>
                  </div>
                </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#"><img src="bg-3.jpg" alt="lets try"/></a>
                  <div className="banner_content">
                    <p>Featured Rings</p>
                    <h2>Platinum Rings</h2>
                    <span>Sale 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
       
      </section> */}
        <div className="home__row">
        
          <Product
            id="1"
            
            weight={11.96}
           // price={11.96*5500}
            rating={5}
            image="1.png"
            title="Platinum Wedding Ring with Diamond(950 Platinum,0.04ct)-Platinum Band For Him. "
          />
          <Product
            id="2"
            
            weight={20.0}
            rating={4}
            image="ms.png"
            title="Gold Mangalsutra Necklace-22kt yellow gold."
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            
            weight={40.99}
            rating={3}
            image="necklaceset.png"
            title="Gold Dulhan Set-22kt yellow gold"
          />
          <Product
            id="4"
            
            weight={10}
            rating={5}
            image="cp.png"
            title="Gold Chain Pendant for kids and women-22kt Gold"
          />
          <Product
            id="5"
            
            weight={15}
            rating={4}
            image="earings.png"
            title="Gold Earings-18kt gold,Laila cutout Gold Earing For Women. "
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
           
            weight={80}
            rating={4}
            image="necklace.png"
            title="An Ancient Adroitness Gold Necklace"
          />
          
        </div>
        <div className="home__row">
          <Product
          id="7"
          weight={30}
          rating={4}
          image="product/11.jpg"
          />
          <Product
          id="8"
          rating={3}
          weight={15}
          image="product/18.jpg"
          />
          <Product
          id="9"
          rating={5}
          weight={25}
            image="product/22.jpg"
          />
          <Product
          id="10"
          weight={12}
          rating={5}
            image="product/41.jpg"
          />
        </div>
        <div className="home_row">
          <section class="banner_fullwidth black_fullwidth">
            <div class="container">
              
                <div class="row align-items-center">
                 
                    <div class="col-12">
                      
                        {/* <div class="banner_text">
                            <p>Sale Off 20% All Products</p>
                            <h2>New Trending Collection</h2>
                            <span>Best Design makes you more special.</span>
                            <a href="#">Shop Now</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
         </div> 
        <div className="home_row">
          <div class="instagram">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="insta-1.jpg"> 
                            <img src="insta-1.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="images/instagram/insta-2.jpg">
                          <img src="instagram/insta-2.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="images/instagram/insta-3.jpg">
                          <img src="instagram/insta-3.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="images/instagram/insta-4.jpg">
                          <img src="instagram/insta-4.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="images/instagram/insta-5.jpg">
                          <img src="instagram/insta-5.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div class="instagram__item set-bg" data-bgimg="images/instagram/insta-6.jpg">
                          <img src="instagram/insta-6.jpg"/>
                            <div class="instagram__text">
                                <i class="ion-social-instagram"></i>
                                <a href="#">@ S.J</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="newsletter_area newsletter_black">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="newsletter_content">
                            <h2>Subscribe for Ashirwaad Magazines</h2>
                            <p>Get E-mail of all the updates about our lastest and special offers</p>
                            <div class="subscibe_form">
                                <form class="footer-newsletter">
                                    <input type="email" placeholder="Email address ..." autocapitalize="off"
                                        autocomplete="off"/>
                                    <button>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
        <section class="banner_section banner_section_five">
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-6 col-md-12">
                        <div class="port-box">
                            <div class="text-overlay">
                                <h1>New Arrivals 2020</h1>
                                <p>Crown for wife</p>
                            </div>
                            <img src="banner/1.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="port-box">
                            <div class="text-overlay">
                                <h1>Featured Products 2020</h1>
                                <p>Pendant for Valentine</p>
                            </div>
                            <img src="banner/2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer_widgets footer_black">
            <div class="container">
                <div class="footer_top">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="widgets_container contact_us">
                                <h3>About S.J</h3>
                                <div class="footer_contact">
                                    <p>Address : S.J palace, Surat, Gujarat</p>
                                    <p>Phone : <a href="tel:(+91)888888885555">(+91)888888885555</a></p>
                                    <p>Email : S.Jjewlers@gmail.com</p>
                                    <ul>
                                        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                        <li><a href="#"><i class="ion-social-rss"></i></a></li>
                                        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                        <li><a href="#"><i class="ion-social-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div class="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Collection</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright_area">
                                <p>Copyright &copy; 2020 <a href="#">S.J</a> All rights Reserved.</p>
                                <img src="papyel2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
      </div>
      
    </div>
  );
}

export default Home;
