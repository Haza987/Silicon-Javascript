import React from 'react'

function Header() {
  return (
    <header>
      <div class="header-container">
        
        <div class="logo">
          {/* <a id="logo" href="#"><img src="Images/FPImages/Logo.svg" alt="Silicon Logo"></img></a> */}
          <h3>Silicon</h3>
        </div>
  
        <nav class="navbar">
          <a class="nav-link" href="#">Features</a>
        </nav>
  
        <div id="darkmode-toggle-switch" class="btn-toggle-switch">
          <span class="label">Dark mode</span>
          <label for="darkmode-switch" class="toggle-switch">
            {/* <input id="darkmode-switch" type="checkbox"> </input> */}
            <span class="slider round"></span>
          </label>
        </div>
  
        <a id="auth-signin" href="#" class="btn-primary bgc">
          <i class="fa-regular fa-user"></i>
          <span>Sign in / up</span>
        </a>
  
        <button class="btn-mobile">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header