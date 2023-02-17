import React from 'react'
import Nav from './Nav'
import '../../styles/components/layout/Header-Nav.css'
const Header = () => {
  return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Nav/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header