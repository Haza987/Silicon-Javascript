import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'

const Consultation = () => {
 
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '', })
  const [errors, setErrors] = useState({})

  const validateField = (name, value) => {
    let error = ''

    if (name === 'name' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Must be at least 2 characters long, no numbers."
    } else if (name === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      error = "Enter a valid email address (eg. username@example.com)."
    } else if (name === 'specialist' && value === "") {
      error = "Please select a specialist from the drop down menu."
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error}))
  }


  const validateForm = () => {
    const newErrors = {};

    if(!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Must be at least 2 characters long, no numbers."
    }


    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address (eg. username@example.com).";
    }

    if (formData.specialist === "") {
      newErrors.specialist = "Please select a specialist from the drop down menu."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value})

    validateField(name, value)
  }

  const handleSubmit = async (e) => {
    (e).preventDefault();

    if (validateForm()) {
      console.log('form valid')
      
      // const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      //   method: 'post',
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // })

      // if (res.ok) {
      //   const data = await res.json();
      //   console.log('response:',data)
      // } else {
      //   console.log('error code: ' , res.status)
      //   const errorData = await res.json();
      //   console.error('Error response:', errorData);
      // }     
    } else {
      console.log('form invalid')
    }
    
  }
 
  return (
    <div className="consultation">
      <div className="card">

        <div className="header">
          <h1>Get Online Consultation</h1>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" name='fullName' className="fullName form-input" placeholder='Full Name' value={formData.fullName} onChange={handleInputChange} required/>
            {errors.fullName && <span className='validation-error'>{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" name='email' className="email form-input" placeholder='Email Address' autoComplete='email' value={formData.email} onChange={handleInputChange} required/>
            {errors.email && <span className='validation-error'>{errors.email}</span>}
          </div>
          
          <div className="input-group">
            <label htmlFor="dropdownMenu">Specialist</label>
            <DropdownMenu name='specialist' value={formData.specialist} onChange={handleInputChange} required/>
            {errors.specialist && <span className='validation-error'>{errors.specialist}</span>}
          </div>

          <button type='submit' className='appointment bgc'>Make an appointment</button>
        </form>

      </div>
    </div>
  )
}

export default Consultation