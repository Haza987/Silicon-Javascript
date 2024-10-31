import React from 'react'

function Info() {
  return (
    <section id="info">
        <div className="main-container">
          <div className="top-section">
            <h2 className="headline-top">Make your money transfer simple and clear</h2>
            
            <ul className="list">
              <li className="list-item"><img className="tick" src="/src/Images/InfImages/tick.svg" alt="tick"/>Banking transactions are free for you</li>
              <li className="list-item"><img className="tick" src="/src/Images/InfImages/tick.svg" alt="tick"/>No monthly cash commission</li>
              <li className="list-item"><img className="tick" src="/src/Images/InfImages/tick.svg" alt="tick"/>Manage payments and transactions online</li>
            </ul>
  
            <div className="right-images">
              <img className="behind" src="/src/Images/InfImages/forecast.svg" alt="Forecast"></img>
              <img className="front" src="/src/Images/InfImages/sendto.svg" alt="Send to"></img>
            </div>
  
            <div className="learn-more bgc">
              <a>Learn more<i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
  
          <div className="bottom-section">
            <div className="left-images">
              <img src="/src/Images/InfImages/contacts.svg" alt="Contacts with card" className="double"></img>
            </div>
  
            <h2 className="headline-bottom">Receive payment from international bank details</h2>
  
            <div className="info">
              <div className="left-info">
                <img src="/src/Images/AFImages/easypayments.svg" alt="icon" className="icon"></img>
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
  
              <div className="right-info">
                <img src="/src/Images/AFImages/regcashback.svg" alt="icon" className="icon"></img>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
  
            <div className="learn-more bgc">
              <a>Learn more <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Info