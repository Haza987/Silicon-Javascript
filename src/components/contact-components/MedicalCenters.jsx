import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

const MedicalCenters = () => {
  return (
    <div className="medCenters">
        <div className="medCenter1">
        <h2>Medical Center 1</h2>

        <div className="address">
          <i className="fa-regular fa-location-dot"></i>
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>

        <div className="number">
          <i className="fa-regular fa-phone-volume"></i>
          <p>(406) 555-0120</p>
        </div>

        <div className="openingTimes">
          <i className="fa-regular fa-clock"></i> 
          <div className="times">
            <p><span className='bold-text'>Mon – Fri:</span> 9:00 – 22:00</p>
            <p><span className="bold-text">Sat – Sun:</span> 9:00 – 20:00</p>
          </div>
      </div>

      </div>
 
      <div className="medCenter2">
        <h2>Medical Center 2</h2>

        <div className="address">
          <i className="fa-regular fa-location-dot"></i>
          <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
        </div>

        <div className="number">
          <i className="fa-regular fa-phone-volume"></i>
          <p>(406) 544-0123</p>
        </div>

        <div className="openingTimes">
          <i className="fa-regular fa-clock"></i> 
          <div className="times">
            <p><span className='bold-text'>Mon – Fri:</span> 9:00 – 22:00</p>
            <p><span className="bold-text">Sat – Sun:</span> 9:00 – 20:00</p>
          </div>
        </div>

      </div>

      <div className="socialMedia">
        <SocialMediaLinks/>
      </div>

    </div>
  )
}

export default MedicalCenters