import React from 'react'

function Info() {
  return (
    <section id="info">
        <div class="main-container">
          <div class="top-section">
            <h2 class="headline-top">Make your money transfer simple and clear</h2>
  
            <ul class="list">
              {/* <li class="list-item"><img class="tick" src="Images/InfImages/tick.svg" alt="tick">Banking transactions are free for you</li> */}
              {/* <li class="list-item"><img class="tick" src="Images/InfImages/tick.svg" alt="tick">No monthly cash commission</li> */}
              {/* <li class="list-item"><img class="tick" src="Images/InfImages/tick.svg" alt="tick">Manage payments and transactions online</li> */}
            </ul>
  
            <div class="right-images">
              {/* <img class="behind" src="Images/InfImages/forecast.svg" alt="Forecast"> */}
              {/* <img class="front" src="Images/InfImages/sendto.svg" alt="Send to"> */}
            </div>
  
            <div class="learn-more bgc">
              <a>Learn more<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
  
          <div class="bottom-section">
            <div class="left-images">
              {/* <img src="Images/InfImages/contacts.svg" alt="Contacts with card" class="double"> */}
            </div>
  
            <h2 class="headline-bottom">Receive payment from international bank details</h2>
  
            <div class="info">
              <div class="left-info">
                {/* <img src="Images/AFImages/easypayments.svg" alt="icon" class="icon"> */}
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
  
              <div class="right-info">
                {/* <img src="Images/AFImages/regcashback.svg" alt="icon" class="icon"> */}
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
  
            <div class="learn-more bgc">
              <a>Learn more <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Info