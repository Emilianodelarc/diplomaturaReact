import React from "react";
import '../../styles/components/layout/Footer.css'
const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="footer_contenedor">
        <div className="col-md-4 footer_span">
          <span className="text-muted">© 2023 Emiliano Del Arco, Inc</span>
        </div>

        <ul className="nav col-md-4 lista_redes">
          <li className="ms-3">
            <a className="text-muted" href="/#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
