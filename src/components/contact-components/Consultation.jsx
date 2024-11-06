import React from 'react'
import DropdownMenu from './DropdownMenu'
import SocialMediaLinks from './SocialMediaLinks'

const Consultation = () => {



  return (
    <div className="consultation">
      <div className="card">

        <h1>Get Online Consultation</h1>

        <div className="input-group">
          <label htmlFor="firstName" className="form-label">Full Name</label>
          <input type="text" id="firstName" className="form-input" placeholder='Name' required/>
        </div>

        <div className="input-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" className="form-input" placeholder='Email Address' autoComplete='email' required/>
        </div>
        
        <div className="input-group">
          <label htmlFor="dropdownMenu">Specialist</label>
          <DropdownMenu/>
        </div>

        <a className='appointment bgc'>Make an appointment</a>

      </div>
    </div>
  )
}

export default Consultation