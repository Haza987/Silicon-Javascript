import React from 'react'

function Review() {
  return (
    <section id="review">
        <div class="main-container">
          <h1>Clients are Loving Our App</h1>

          <div class="card1">
            {/* <img src="Images/RevImages/quotemark.svg" alt="Quotemark" class="quotemark"> */}

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          
            <p class="text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
           
            <div class="reviewer">
              <div class="image">
                {/* <img src="Images/RevImages/Fannie.svg" alt="Fannie Summers" class="face"> */}
              </div>

              <div class="info">
                <h4 class="name">Fannie Summers</h4>
                <p class="job">Designer</p>
              </div>
            </div>
          </div>

          <div class="card2">
            {/* <img src="Images/RevImages/quotemark.svg" alt="Quotemark" class="quotemark"> */}

            <div class="stars">
              <div class="gold">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>

            <p class="text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>

            <div class="reviewer">
              <div class="image">
                {/* <img src="Images/RevImages/Albert.svg" alt="Albert Flores" class="face"> */}
              </div>

              <div class="info">
                <h4 class="name">Albert Flores</h4>
                <p class="job">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Review