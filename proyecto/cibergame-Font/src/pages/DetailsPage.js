import React from 'react';
import details01 from '../img/details/details-01.jpg';
import details02 from '../img/details/details-02.jpg';
import details03 from '../img/details/details-03.jpg';
import featureLeft from '../img/details/feature-left.jpg';
import featureRight from '../img/details/feature-right.jpg';
import otherGame01 from '../img/details/other-game-01.jpg';
import otherGame02 from '../img/details/other-game-02.jpg';
import otherGame03 from '../img/details/other-game-03.jpg';
import otherGame04 from '../img/details/other-game-04.jpg';
import otherGame05 from '../img/details/other-game-05.jpg';
import otherGame06 from '../img/details/other-game-06.jpg';
import '../styles/components/pages/DetailPage.css';
const DetailsPage = () => {
  return (
    <main className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-banner header-text">
                    <div className="row">
                      <div className="col-lg-4 img-l">
                        <img src={featureLeft} alt="Fortnite"/>
                      </div>
                      <div className="col-lg-8">
                        <div className="thumb">
                          <img src={featureRight} alt="Fortnite"/>
                          <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="game-details">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Fortnite Details</h2>
                  </div>
                  <section className="col-lg-12">
                    <div className="content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-info">
                            <div className="left">
                              <h4>Fortnite</h4>
                              <span>Sandbox</span>
                            </div>
                            <ul>
                              <li><i className="fa fa-star"></i> 4.8</li>
                              <li><i className="fa fa-download"></i> 2.3M</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-info">
                            <ul>
                              <li><i className="fa fa-star"></i> 4.8</li>
                              <li><i className="fa fa-download"></i> 2.3M</li>
                              <li><i className="fa fa-server"></i> 36GB</li>
                              <li><i className="fa fa-gamepad"></i> Action</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <img src={details01} alt="Fortnite"/>
                        </div>
                        <div className="col-lg-4">
                          <img src={details02} alt="Fortnite"/>
                        </div>
                        <div className="col-lg-4">
                          <img src={details03} alt="Fortnite"/>
                        </div>
                        <div className="col-lg-12">
                          <p>CiberGame Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sapiente explicabo molestiae sequi corporis laudantium quam aliquam dolorum, exercitationem totam? Maiores quaerat suscipit ipsum, autem ab quia repellendus. Non, quo?<a href="/#">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                        </div>
                        <div className="col-lg-12">
                          <div className="main-border-button">
                            <a href="/#">Download Fortnite Now!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section className="other-games">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4><em>Other Related</em> Games</h4>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame01} alt="Overwatch" className="CiberGame-item"/>
                      <h4>Overwatch 2</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame02} alt="Enlisted" className="CiberGame-item"/>
                      <h4>Enlisted</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame03} alt="Game of Thrones" className="CiberGame-item"/>
                      <h4>Game of Thrones</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame04} alt="Halo" className="CiberGame-item"/>
                      <h4>Halo</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame05} alt="Crossout" className="CiberGame-item"/>
                      <h4>Crossout</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item">
                      <img src={otherGame06} alt="Destiny" className="CiberGame-item"/>
                      <h4>Destiny 2</h4><span>Sandbox</span>
                      <ul>
                        <li><i className="fa fa-star"></i> 4.8</li>
                        <li><i className="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}

export default DetailsPage