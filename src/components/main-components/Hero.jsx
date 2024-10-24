import React from 'react'

function Hero() {
  return (
    <section id="hero">
        <div className="main-container">
          <div className="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>

          <div className="content">
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <div className="downloadbuttons"> 
                <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" className="app"><img src="/src/Images/FPImages/appstore.svg" alt="app store"></img></a>
                <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" className="app"><img src="/src/Images/FPImages/googleplay.svg" alt="google play"></img></a>
                <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" className="app-dark"><img src="/src/Images/FPImages/appstore-dark.svg" alt="app store"></img></a>
                <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" className="app-dark"><img src="/src/Images/FPImages/googleplay-dark.svg" alt="google play"></img></a>
              </div>

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