import React from 'react'
import SubscribeInput from './utilities/Subscribe/SubscribeInput'


function Subscribe() {
  return (
    <section id="subscribe">
        <div className="main-container">

          <div className="bell">
            <img src="/src/Images/SubImages/bell.svg" alt="bell with notification"></img>
          </div>
  
          <h2 className="main-text">Subscribe to our newsletter </h2>
          <h2 className="main-desktop-text">Subscribe to our newsletter to stay informed about latest updates</h2>
          
          <SubscribeInput />

        </div>
      </section>
  )
}

export default Subscribe