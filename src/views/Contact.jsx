import React from 'react'
import Breadcrumb from '../components/global-components/Breadcrumb'

const Contact = () => {
  return (
    <>
      <Breadcrumb/>

      <div className="contactUs">
        
        <h1>Contact Us</h1>

        <div className="Email">
          <i class="fa-regular fa-envelope"></i>
          <h3>Email Us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <p>Leave a message <i className="fa-regular fa-arrow-right"></i></p>
        </div>

        <div className="careers">
          <i class="fa-light fa-users-medical"></i>
          <h3>Careers</h3>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <p>Send an application<i className="fa-regular fa-arrow-right"></i></p>
        </div>
      </div>

      <div className="consultation">
        <div className="container">

          <h1>Get Online Consultation</h1>

            <div class="input-group">
              <label for="firstName" class="form-label">Full Name</label>
              <input type="text" id="firstName" class="form-input" required/>
            </div>

            <div class="input-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" class="form-input" required/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact