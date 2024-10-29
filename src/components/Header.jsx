import React from 'react'
import DarkModeSwitch from './main-components/utilities/Header/DarkModeSwitch'
import MobileMenu from './main-components/utilities/Header/MobileMenu'

function Header() {
  return (
    <header>
      <div className="header-container">
        
        <div className="logo">
          <a id="logo" href="#"><img src="/src/Images/FPImages/Logo.svg" alt="Silicon Logo"></img></a>
          <h3>Silicon</h3>
        </div>
    
        <nav className="navbar">
          <a className="nav-link" href="#">Features</a>
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