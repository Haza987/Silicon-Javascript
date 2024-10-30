import React from 'react'

  const SubscribeInput = () => {

    const email = (e) => {
      e.preventDefault();
      console.log('Subscribe Button Pressed')
    }

    return (
      <div className="input">
        <div className="input-container">
          <i className="fa-regular fa-envelope"></i>
          <input className="form-input" type="email" name="email" id="email" required placeholder="Your email"></input>
        </div>

        <button className="btn btn-primary bgc" onClick={email}>Subscribe</button>
      </div>
    )
  }

export default SubscribeInput