import React from 'react'
import Breadcrumb from '../components/global-components/Breadcrumb'
import ContactUs from '../components/contact-components/ContactUs'
import Consultation from '../components/contact-components/Consultation'
import Map from '../components/contact-components/Map'
import MedicalCenters from '../components/contact-components/MedicalCenters'

const Contact = () => {
  return (
    <>
      <Breadcrumb/>

        <div id='contact'>
          <div className="main-container">
            <h1>Contact Us</h1>
            
            <div className="top">
              <ContactUs/>
              <Consultation/>
            </div>

            <div className="location">
              <Map/>
              <MedicalCenters/>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Contact