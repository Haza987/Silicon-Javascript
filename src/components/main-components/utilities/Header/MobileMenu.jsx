import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
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
              <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink className="nav-link" to="/features" onClick={closeMenu}>Features</NavLink>
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu