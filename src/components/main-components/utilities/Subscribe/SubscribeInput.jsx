import React, { useState } from 'react'
import axios from 'axios'

  const SubscribeInput = () => {

    
    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    
    
    const handleInputChange = (e) => {
      setInput(e.target.value)
      setError('')
      setSuccess('')
    }
    
    const handleSubscribe = async (e) => {
      e.preventDefault();
      if (validateEmail(input)) {
        console.log('Email subscribed:',input)
        setError('')
        setSuccess('You have subscribed to our newsletter!')

        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {email: input})

        if(res.status !== 200) {
          console.log(res.data)
        }
      }
    }

    const validateEmail = (input) => {

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
      if(input.trim().length <= 0) {
        setError ('You must enter an email address')
        return false
      } 
      else if (!emailRegex.test(input)) {
        setError ('You must enter a valid email address')
        return false
      }
    
      return true
    }
    
    
    return (
      <div className="input">
        <div className="input-container">
          <i className="fa-regular fa-envelope"></i>
          <input className="form-input" type="email" name="email" id="email" required placeholder="Your email" value={input} onChange={handleInputChange}></input>
          <button className="btn btn-primary bgc" onClick={handleSubscribe}>Subscribe</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    )
  }

export default SubscribeInput