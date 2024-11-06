import React from 'react'

const ContactUs = () => {
  return (
    <div className="contactUs">
        
      <h1>Contact Us</h1>

      <div className="email">
        <div className="container">
          <div className="icon">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <div className="text">
            <h2>Email Us</h2>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <a href="#">Leave a message <i className="fa-regular fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="careers">
        <div className="container">
          <div className="icon">
            <i className="fa-light fa-users-medical"></i>
          </div>

          <div className="text">
            <h2>Careers</h2>
            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
            <a href="#">Send an application <i className="fa-regular fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs