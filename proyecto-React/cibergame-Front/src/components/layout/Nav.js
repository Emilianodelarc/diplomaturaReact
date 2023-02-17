import React from "react";
import { NavLink } from "react-router-dom";
import avatar from '../../img/profile-header.jpg'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  main-nav">
      <div className="container-fluid">
        <div className="logo-wrap">
          <NavLink to='/' className="hover-target">
            <span>Ciber</span>Game
          </NavLink>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link" aria-current="page" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/games' activestyle={{color: "#e75e8d"}} className="nav-link" >
                Games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/details' activestyle={{color: "#e75e8d"}} className="nav-link" >
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/streams' activestyle={{color: "#e75e8d"}} className="nav-link" >
                Streams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contacts' activestyle={{color: "#e75e8d"}} className="nav-link" >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' activestyle={{color: "#e75e8d"}}>
                Profile
                <img src={avatar} alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
