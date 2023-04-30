import React from 'react'

const NovedadItem = (props) => {
    const {title, subtitle, body, imagen} = props
  return (
    <>
    <div className="game-details">
              <div className="row">
                <div className="col-lg-12">
                  <h2>{title}</h2>
                </div>
                <section className="col-lg-12">
                  <div className="content">
                    <div className="row">
                      <div className="col-lg-12">
                        <img src={imagen} alt="Fortnite" />
                      </div>
                      <div className="col-lg-12">
                        <p dangerouslySetInnerHTML={{__html: body}} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
    
    {/* <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={imagen}/>
        <div dangerouslySetInnerHTML={{__html: body}}/>
    </div> */}
    </>
    
  )
}

export default NovedadItem