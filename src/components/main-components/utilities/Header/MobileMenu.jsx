import React, { useEffect, useState } from 'react'

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
              <p>Home</p>
              <p>Features</p>
              <p>Contact</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu