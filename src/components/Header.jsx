import React from 'react'
import DarkModeSwitch from './main-components/utilities/Header/DarkModeSwitch'
import MobileMenu from './main-components/utilities/Header/MobileMenu'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-container">
        
        <div className="logo">
          <Link id="logo" to="/">
          <img src="/src/Images/FPImages/Logo.svg" alt="Silicon Logo"></img>
          </Link>
          <NavLink className="nav-link logo-text" to="/">Silicon</NavLink> 
          
        </div>
    
        <nav className="navbar">
          <NavLink className="nav-link" to="/features">Features</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>
  
        <DarkModeSwitch />
  
        <a id="auth-signin" href="#" className="btn-primary bgc">
          <i className="fa-regular fa-user"></i>
          <span>Sign in / up</span>
        </a>
  
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header