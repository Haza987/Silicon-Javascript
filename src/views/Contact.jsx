import React from 'react'
import Breadcrumb from '../components/global-components/Breadcrumb'
import ContactUs from '../components/contact-components/ContactUs'
import Consultation from '../components/contact-components/Consultation'

const Contact = () => {
  return (
    <>
      <Breadcrumb/>

        <div className="top">
          <ContactUs/>
          <Consultation/>
        </div>

        <div className="location">
          
        </div>
        
    </>
  )
}

export default Contact