import React from "react";
import featured01 from '../img/games/featured-01.jpg';
import featured02 from '../img/games/featured-02.jpg';
import featured03 from '../img/games/featured-03.jpg';
import avatar01 from '../img/streams/avatar-01.png';
import avatar02 from '../img/streams/avatar-02.png';
import avatar03 from '../img/streams/avatar-03.png';
import avatar04 from '../img/streams/avatar-04.png';
import stream01 from '../img/streams/stream-01.jpg';
import stream02 from '../img/streams/stream-02.jpg';
import stream03 from '../img/streams/stream-03.jpg';
import stream04 from '../img/streams/stream-04.jpg';
import stream05 from '../img/streams/stream-05.jpg';
import stream06 from '../img/streams/stream-06.jpg';
import stream07 from '../img/streams/stream-07.jpg';
import stream08 from '../img/streams/stream-08.jpg';
import '../styles/components/pages/StreamsPage.css';
const StreamsPage = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <section className="row">
              <div className="col-lg-8">
                <div className="featured-games header-text">
                  <div className="heading-section">
                    <h4>
                      <em>Live</em> Streams
                    </h4>
                  </div>
                  <div
                    id="carouselExampleControlsNoTouching"
                    className="carousel slide"
                    data-bs-touch="false"
                    data-bs-interval="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="item">
                          <div className="thumb">
                            <img
                              src={featured01}
                              alt="CS-GO"
                            />
                            <div className="hover-effect">
                              <h6>2.4K Streaming</h6>
                            </div>
                          </div>
                          <h4>
                            CS-GO
                            <br />
                            <span>249K Downloads</span>
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
                      <div className="carousel-item">
                        <div className="item">
                          <div className="thumb">
                            <img
                              src={featured02}
                              alt="Gamezer"
                            />
                            <div className="hover-effect">
                              <h6>2.4K Streaming</h6>
                            </div>
                          </div>
                          <h4>
                            Gamezer
                            <br />
                            <span>249K Downloads</span>
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
                      <div className="carousel-item">
                        <div className="item">
                          <div className="thumb">
                            <img
                              src={featured03}
                              alt="Island Rusty"
                            />
                            <div className="hover-effect">
                              <h6>2.4K Streaming</h6>
                            </div>
                          </div>
                          <h4>
                            Island Rusty
                            <br />
                            <span>249K Downloads</span>
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
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControlsNoTouching"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControlsNoTouching"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-streamers">
                  <div className="heading-section">
                    <h4>
                      <em>Top</em> Streamers
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <span>01</span>
                      <img src={avatar01} alt="" />
                      <h6>
                        <i className="fa fa-check"></i> Happy
                      </h6>
                      <div className="main-button">
                        <a href="/#">Follow</a>
                      </div>
                    </li>
                    <li>
                      <span>02</span>
                      <img src={avatar02} alt="" />
                      <h6>
                        <i className="fa fa-check"></i> Gleaming
                      </h6>
                      <div className="main-button">
                        <a href="/#">Follow</a>
                      </div>
                    </li>
                    <li>
                      <span>03</span>
                      <img src={avatar03} alt="" />
                      <h6>
                        <i className="fa fa-check"></i> Fearful
                      </h6>
                      <div className="main-button">
                        <a href="/#">Follow</a>
                      </div>
                    </li>
                    <li>
                      <span>04</span>
                      <img src={avatar04} alt="" />
                      <h6>
                        <i className="fa fa-check"></i> Omeg
                      </h6>
                      <div className="main-button">
                        <a href="/#">Follow</a>
                      </div>
                    </li>
                    <li>
                      <span>05</span>
                      <img src={avatar01} alt="" />
                      <h6>
                        <i className="fa fa-check"></i> Thirsty
                      </h6>
                      <div className="main-button">
                        <a href="/#">Follow</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="live-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>
                    <em>Most Popular</em> Live Stream
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream01} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar01} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> Gleaming Omeg
                      </span>
                      <h4>Just Talking With Fans</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream06} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar02} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> Happyalc
                      </span>
                      <h4>CS-GO 36 Hours Live Stream</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream07} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar03} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> Fearful
                      </span>
                      <h4>Maybe Nathej Allnight Chillin'</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream08} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar04} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> Thirsty
                      </span>
                      <h4>Live Streaming Till Morning</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream04} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar01} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i>Gleaming
                      </span>
                      <h4>Just Talking With Fans</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream03} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar02} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> HappyGo
                      </span>
                      <h4>CS-GO 36 Hours Live Stream</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream05} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar03} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> Fearful play
                      </span>
                      <h4>Maybe Nathej Allnight Chillin'</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <img src={stream02} alt="" />
                      <div className="hover-effect">
                        <div className="content">
                          <div className="live">
                            <a href="/#">Live</a>
                          </div>
                          <ul>
                            <li>
                              <a href="/#">
                                <i className="fa fa-eye"></i> 1.2K
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i className="fa fa-gamepad"></i> CS-GO
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <div className="avatar">
                        <img src={avatar04} alt="" />
                      </div>
                      <span>
                        <i className="fa fa-check"></i> NewThirsty
                      </span>
                      <h4>Live Streaming Till Morning</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="/#">Load More Streams</a>
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

export default StreamsPage;
