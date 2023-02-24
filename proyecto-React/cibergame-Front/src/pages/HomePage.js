import React from "react";
import popular01 from '../img/home/popular-01.jpg';
import popular02 from '../img/home/popular-02.jpg';
import popular03 from '../img/home/popular-03.jpg';
import popular04 from '../img/home/popular-04.jpg';
import popular05 from '../img/home/popular-05.jpg';
import popular06 from '../img/home/popular-06.jpg';
import popular07 from '../img/home/popular-07.jpg';
import popular08 from '../img/home/popular-08.jpg';
import '../styles/components/pages/HomePage.css';

const HomePage = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <section className="main-banner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="header-text">
                    <h6>Welcome To CiberGame</h6>
                    <h4>
                      <em>Games</em> Our Popular Games Here
                    </h4>
                    <div className="main-button">
                      <a href='/games'>Games Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Most Popular</em> Right Now
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular01} alt="Fortnite" />
                        <h4>
                          Fortnite
                          <br />
                          <span>Sandbox</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular02} alt="PUBG" />
                        <h4>
                          PUBG
                          <br />
                          <span>Battle S</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular03} alt="Dota2" />
                        <h4>
                          Dota2
                          <br />
                          <span>Steam-X</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular04} alt="CS-GO" />
                        <h4>
                          CS-GO
                          <br />
                          <span>Legendary</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular05} alt="Minecraft" />
                        <h4>
                          Minecraft
                          <br />
                          <span>Legendary</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img
                          src={popular06}
                          alt="Eagles Fligth"
                        />
                        <h4>
                          Eagles Fligth
                          <br />
                          <span>Matrix Games</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular07} alt="Warface" />
                        <h4>
                          Warface
                          <br />
                          <span>Max 3D</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="item">
                        <img src={popular08} alt="Warcraft" />
                        <h4>
                          Warcraft
                          <br />
                          <span>Legend</span>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i> 4.8
                          </li>
                          <li>
                            <i className="fa fa-download"></i> 2.3M
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="main-button">
                        <a href='/games'>Discover Popular Game</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
