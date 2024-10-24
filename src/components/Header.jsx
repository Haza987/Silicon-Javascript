import React from 'react'

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
  
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
  
        <a id="auth-signin" href="#" className="btn-primary bgc">
          <i className="fa-regular fa-user"></i>
          <span>Sign in / up</span>
        </a>
  
        <button className="btn-mobile">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header