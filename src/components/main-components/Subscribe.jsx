import React from 'react'

function Subscribe() {
  return (
    <section id="subscribe">
        <div class="main-container">

          <div class="bell">
            {/* <img src="Images/SubImages/bell.svg" alt="bell with notification"> */}
          </div>
  
          <h2 class="main-text">Subscribe to our newsletter </h2>
          <h2 class="main-desktop-text">Subscribe to our newsletter to stay informed about latest updates</h2>
          
          <div class="input">
            <div class="input-container">
              <i class="fa-regular fa-envelope"></i>
              {/* <input class="form-input" type="email" name="email" id="email" required placeholder="Your email"> */}
            </div>
  
            <a class="btn btn-primary bgc">Subscribe</a>
          </div>
        </div>
      </section>
  )
}

export default Subscribe