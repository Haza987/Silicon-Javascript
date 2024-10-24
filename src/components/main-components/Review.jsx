import React from 'react'

function Review() {
  return (
    <section id="review">
        <div className="main-container">
          <h1>Clients are Loving Our App</h1>

          <div className="card1">
            <img src="/src/Images/RevImages/quotemark.svg" alt="Quotemark" className="quotemark"></img>

            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          
            <p className="text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
           
            <div className="reviewer">
              <div className="image">
                <img src="/src/Images/RevImages/Fannie.svg" alt="Fannie Summers" className="face"></img>
              </div>

              <div className="info">
                <h4 className="name">Fannie Summers</h4>
                <p className="job">Designer</p>
              </div>
            </div>
          </div>

          <div className="card2">
            <img src="/src/Images/RevImages/quotemark.svg" alt="Quotemark" className="quotemark"></img>

            <div className="stars">
              <div className="gold">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>

            <p className="text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>

            <div className="reviewer">
              <div className="image">
                <img src="/src/Images/RevImages/Albert.svg" alt="Albert Flores" className="face"></img>
              </div>

              <div className="info">
                <h4 className="name">Albert Flores</h4>
                <p className="job">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Review