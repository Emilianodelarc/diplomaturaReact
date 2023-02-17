import React from 'react';
import profile from '../img/profile-header.jpg';
import game01 from '../img/games/game-01.jpg';
import game02 from '../img/games/game-02.jpg';
import game03 from '../img/games/game-03.jpg';
import fight from '../img/profile/fight.gif';
import goal from '../img/profile/goal.gif';
import mario from '../img/profile/mario.gif';
import pacman from '../img/profile/pacman.gif';
import '../styles/components/pages/ProfilePage.css';

const ProfilePage = () => {
  return (
    <main className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <section className="main-profile ">
                    <div className="row">
                      <div className="col-lg-4">
                        <img src={profile} alt=""/>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="main-info header-text">
                          <span>Offline</span>
                          <h4>Pedro Pepe Perez</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <div className="main-border-button">
                            <a href="/#">Start Live Stream</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <ul>
                          <li>Games Downloaded <span>3</span></li>
                          <li>Friends Online <span>16</span></li>
                          <li>Live Streams <span>None</span></li>
                          <li>Clips <span>29</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="clips">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="heading-section">
                                <h4><em>Your Most Popular</em> Clips</h4>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="item">
                                <div className="thumb">
                                  <img src={pacman} alt=""/>
                                  <a href="https://www.youtube.com/watch?v=-CbyAk3Sn9I" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="down-content">
                                  <h4>Pacman</h4>
                                  <span><i className="fa fa-eye"></i> 250</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="item">
                                <div className="thumb">
                                  <img src={fight} alt=""/>
                                  <a href="https://www.youtube.com/watch?v=wymIQ1FywrA" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="down-content">
                                  <h4>Fight</h4>
                                  <span><i className="fa fa-eye"></i> 183</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="item">
                                <div className="thumb">
                                  <img src={goal} alt=""/>
                                  <a href="https://www.youtube.com/watch?v=VVWgkkchX60" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="down-content">
                                  <h4>Goal- Rocket</h4>
                                  <span><i className="fa fa-eye"></i> 141</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="item">
                                <div className="thumb">
                                  <img src={mario} alt=""/>
                                  <a href="https://www.youtube.com/watch?v=rLl9XBg7wSs" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="down-content">
                                  <h4>Mario Bross</h4>
                                  <span><i className="fa fa-eye"></i> 91</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="main-button">
                                <a href="/#">Load More Clips</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section className="gaming-library profile-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4><em>Your Gaming</em> Library</h4>
                  </div>
                  <div className="item">
                    <ul>
                      <li><img src={game01} alt="Fortnite" className="cibergame-item"/></li>
                      <li><h4>Fortnite</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>24/08/2036</span></li>
                      <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button border-no-active"><a href="/#">Donwloaded</a></div></li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li><img src={game02} alt="CS-GO" className="cibergame-item"/></li>
                      <li><h4>CS-GO</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>22/06/2036</span></li>
                      <li><h4>Hours Played</h4><span>745 H 22 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button border-no-active"><a href="/#">Donwloaded</a></div></li>
                    </ul>
                  </div>
                  <div className="item last-item">
                    <ul>
                      <li><img src={game03} alt="PUBG" className="cibergame-item"/></li>
                      <li><h4>PUBG</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>21/04/2022</span></li>
                      <li><h4>Hours Played</h4><span>632 H 46 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button border-no-active"><a href="/#">Donwloaded</a></div></li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </main>

  )
}

export default ProfilePage