import React from "react";

const NovedadItem = (props) => {
  const { title, subtitle, body, imagen } = props;
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
                <h4>{subtitle}</h4>
                <div className="col-lg-12">
                  <p dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NovedadItem;
