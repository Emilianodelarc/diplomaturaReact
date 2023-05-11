import React, {useEffect,useState} from "react";
import { useInfoContext } from "../utils/InfoContext";
import ReactPaginate from "react-paginate";
import loading from '../img/games/loading.gif';
import featured01 from '../img/games/featured-01.jpg';
import featured02 from '../img/games/featured-02.jpg';
import featured03 from '../img/games/featured-03.jpg';
import game01 from '../img/games/game-01.jpg';
import game02 from '../img/games/game-02.jpg';
import game03 from '../img/games/game-03.jpg';
import service01 from '../img/games/service-01.jpg';
import service02 from '../img/games/service-02.jpg';
import service03 from '../img/games/service-03.jpg';
import '../styles/components/pages/GamesPage.css';


const GamesPage = () => {
  const { items } = useInfoContext();
  const [page, setPage] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 8;
    
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setPage(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };
  
  




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
                      <em>Featured</em> Games
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
                <div className="top-downloaded">
                  <div className="heading-section">
                    <h4>
                      <em>Top</em> Downloaded
                    </h4>
                  </div>
                  <ul>
                    <li>
                      <img
                        src={game01}
                        alt="Fortnite"
                        className="CiberGame-item"
                      />
                      <h4>Fortnite</h4>
                      <h6>Sandbox</h6>
                      <span>
                        <i className="fa fa-star" ></i> 4.9
                      </span>
                      <span>
                        <i className="fa fa-download" ></i>
                        2.2M
                      </span>
                      <div className="download">
                        <a href="/#">
                          <i className="fa fa-download"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <img
                        src={game02}
                        alt="CS-GO"
                        className="CiberGame-item"
                      />
                      <h4>CS-GO</h4>
                      <h6>Legendary</h6>
                      <span>
                        <i className="fa fa-star"></i> 4.9
                      </span>
                      <span>
                        <i className="fa fa-download"></i>
                        2.2M
                      </span>
                      <div className="download">
                        <a href="/#">
                          <i className="fa fa-download"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <img
                        src={game03}
                        alt="PUBG"
                        className="CiberGame-item"
                      />
                      <h4>PUBG</h4>
                      <h6>Battle Royale</h6>
                      <span>
                        <i className="fa fa-star"></i> 4.9
                      </span>
                      <span>
                        <i className="fa fa-download"></i>
                        2.2M
                      </span>
                      <div className="download">
                        <a href="/#">
                          <i className="fa fa-download"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="text-button">
                    <a href="profile.html">View All Games</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>All</em> Games
                    </h4>
                  </div>
                  <div className="row">
                    {page.length === 0 ? <img src={loading} alt='loading'/> :
                    page.map(game=>{
                      return (
                        <>
                      <div key={game.id} className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src={game.thumbnail} alt={game.title} />
                          <h4>
                            {game.title}
                            <br />
                            <span>{game.genre}</span>
                          </h4>
                        </div>
                    </div>
                    </>)
                    })}
                    <div className="pagination">
                      <ReactPaginate
                          nextLabel="next"
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={1}
                          marginPagesDisplayed={1}
                          pageCount={pageCount}
                          previousLabel="prev"
                          pageClassName="page-item"
                          pageLinkClassName="page-link"
                          previousClassName="page-item"
                          previousLinkClassName="page-link"
                          nextClassName="page-item"
                          nextLinkClassName="page-link"
                          breakLabel="..."
                          breakClassName="page-item"
                          breakLinkClassName="page-link"
                          containerClassName="pagination"
                          activeClassName="active"
                          renderOnZeroPageCount={null}
                      /> 
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="start-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>
                    <em>How To Start Your</em> Live Stream
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img
                          src={service01}
                          alt="service-01"
                        />
                      </div>
                      <h4>Go To Your Profile</h4>
                      <p>
                        CiberGame Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Voluptates, est necessitatibus eos
                        facere beatae consectetur rerum sequi aperiam delectus?
                        Aliquam ipsam consequuntur nesciunt impedit. Harum nam
                        non optio quo saepe!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img
                          src={service02}
                          alt="service-02"
                        />
                      </div>
                      <h4>Live Stream Button</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum itaque, dolore illo quam accusantium aliquid
                        voluptatum voluptas commodi quia, quae fugiat? Nihil
                        repudiandae, pariatur minima odio sed iure modi tenetur
                        <a href="/#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img
                          src={service03}
                          alt="service-03"
                        />
                      </div>
                      <h4>You Are Live</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus vel assumenda deleniti aperiam enim
                        impedit! Ad, modi minima et repellendus tempora dolor
                        delectus fuga error voluptatibus hic nam iste
                        inventore?.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href='/streams' >Go To Streams</a>
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

export default GamesPage;
