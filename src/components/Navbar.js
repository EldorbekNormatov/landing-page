import React from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo1.png'

function Navbar() {
    return (
      <div>
        <nav>
          <Link to="main" className="logo" smooth={true} duration={2000}>
            <img src={logo} alt="logo" />
          </Link>
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label for="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="main" smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={1000}>
                Features
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={1000}>
                Services
              </Link>
            </li>
            <li>
              <Link to="subscribe" smooth={true} duration={1000}>
                Subscribe
              </Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
          <Link to="#" className="hey">
            To App
          </Link>
        </nav>
      </div>
    );
}

export default Navbar
