import React, {useState, useEffect} from "react";
import loadGif from '../img/loading-bar.gif'
import otherGame01 from "../img/details/other-game-01.jpg";
import otherGame02 from "../img/details/other-game-02.jpg";
import otherGame03 from "../img/details/other-game-03.jpg";
import otherGame04 from "../img/details/other-game-04.jpg";
import otherGame05 from "../img/details/other-game-05.jpg";
import otherGame06 from "../img/details/other-game-06.jpg";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";
import "../styles/components/pages/DetailPage.css";




const NovedadesPage = () => {
    const [loading, setLoading] = useState(false)
    const [novedades, setNovedades] = useState([])

    useEffect(() => {
      const cargarNovedades = async()=>{
        setLoading(true)
        
        const response = await axios.get('http://localhost:3000/api/novedades')
        
        setTimeout(() => {
           setNovedades(response.data) 
          setLoading(false)  
        }, 3000);
        

        console.log(novedades);
      }

      cargarNovedades()
    }, [])
    

  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-12">
              </div>
            </div>
            { loading ? <img src={loadGif}/> :

               novedades.map(item => <NovedadItem key={item.id} 
                title={item.titulo} subtitle={item.subtitulo} 
                imagen={item.imagen || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'} body={item.cuerpo} />)
            }
            <section className="other-games">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Other Related</em> Games
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame01}
                      alt="Overwatch"
                      className="CiberGame-item"
                    />
                    <h4>Overwatch 2</h4>
                    <span>Sandbox</span>
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
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame02}
                      alt="Enlisted"
                      className="CiberGame-item"
                    />
                    <h4>Enlisted</h4>
                    <span>Sandbox</span>
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
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame03}
                      alt="Game of Thrones"
                      className="CiberGame-item"
                    />
                    <h4>Game of Thrones</h4>
                    <span>Sandbox</span>
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
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame04}
                      alt="Halo"
                      className="CiberGame-item"
                    />
                    <h4>Halo</h4>
                    <span>Sandbox</span>
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
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame05}
                      alt="Crossout"
                      className="CiberGame-item"
                    />
                    <h4>Crossout</h4>
                    <span>Sandbox</span>
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
                <div className="col-lg-6">
                  <div className="item">
                    <img
                      src={otherGame06}
                      alt="Destiny"
                      className="CiberGame-item"
                    />
                    <h4>Destiny 2</h4>
                    <span>Sandbox</span>
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
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NovedadesPage;
