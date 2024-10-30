import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if(showMenu) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  },[showMenu])

  return (
    <>
      <button className="btn-mobile" onClick={toggleMenu}>
        <i className="fa-regular fa-bars"></i>
      </button>

      <div className="navigation">
        <div className="menu-container">
          <nav className={`${showMenu ? 'show' : ''}`}>
            <div className="nav-links">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/features">Features</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu