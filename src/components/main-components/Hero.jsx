import React from 'react'
import ImageSwitch from './utilities/ImageSwitch'

function Hero() {
  return (
    <section id="hero">
        <div className="main-container">
          <div className="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>

          <div className="content">
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>

              <ImageSwitch />

              <a href="#" className="discovermore">
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
                  <span>Discover more</span>
              </a>
          </div>

          <div className="images">
            <img src="/src/Images/FPImages/iphone_mybudget_desktop.svg" alt="iphone my budget" className="img-back"></img>
            <img src="/src/Images/FPImages/iphone_yourcards_desktop.svg" alt="iphone your cards" className="img-front"></img>
          </div>

        </div>
      </section>
  )
}

export default Hero