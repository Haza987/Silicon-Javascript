import React from 'react'

function Hero() {
  return (
    <section id="hero">
        <div class="main-container">
          <div class="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>

          <div class="content">
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <div class="downloadbuttons"> 
                {/* <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" class="app"><img src="Images/FPImages/appstore.svg" alt="app store"></a> */}
                {/* <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" class="app"><img src="Images/FPImages/googleplay.svg" alt="google play"></a> */}
                {/* <a href="https://apps.apple.com/us/app/silicon-info/id1542271266?mt=12" class="app-dark"><img src="Images/FPImages/appstore-dark.svg" alt="app store"></a> */}
                {/* <a href="https://play.google.com/store/search?q=silicon&c=apps&hl=en" class="app-dark"><img src="Images/FPImages/googleplay-dark.svg" alt="google play"></a> */}
              </div>

              <a href="#" class="discovermore">
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
                  <span>Discover more</span>
              </a>
          </div>

          <div class="images">
            {/* <img src="Images/FPImages/iphone_mybudget_desktop.svg" alt="iphone my budget" class="img-back"> */}
            {/* <img src="Images/FPImages/iphone_yourcards_desktop.svg" alt="iphone your cards" class="img-front"> */}
          </div>

        </div>
      </section>
  )
}

export default Hero