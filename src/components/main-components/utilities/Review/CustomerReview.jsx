import React from 'react'

const CustomerReview = ({item}) => {
  return (

      <div className="item">
        <img src="/src/Images/RevImages/quotemark.svg" alt="Quotemark" className="quotemark"></img>

          <div className="star-rating">
            {[...Array(item.starRating)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>

          <div className="text">         
            <p>{item.comment}</p>
          </div>

          
          <div className="reviewer">

            <div className="image">         
              <img src={item.avatarUrl} alt={item.author} />
            </div>

            
            <div className="info">

              <div className="name">         
                <h4>{item.author}</h4>
              </div>

              <div className="job">         
                <p>{item.jobRole}</p>
              </div>
            </div>
          </div>
        </div>

  )
}

export default CustomerReview