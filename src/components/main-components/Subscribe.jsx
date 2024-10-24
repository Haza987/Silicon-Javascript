import React from 'react'

function Subscribe() {
  return (
    <section id="subscribe">
        <div className="main-container">

          <div className="bell">
            <img src="/src/Images/SubImages/bell.svg" alt="bell with notification"></img>
          </div>
  
          <h2 className="main-text">Subscribe to our newsletter </h2>
          <h2 className="main-desktop-text">Subscribe to our newsletter to stay informed about latest updates</h2>
          
          <div className="input">
            <div className="input-container">
              <i className="fa-regular fa-envelope"></i>
              <input className="form-input" type="email" name="email" id="email" required placeholder="Your email"></input>
            </div>
  
            <a className="btn btn-primary bgc">Subscribe</a>
          </div>
        </div>
      </section>
  )
}

export default Subscribe