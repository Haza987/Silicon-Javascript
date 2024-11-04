import React, { useEffect, useState } from 'react'
import CustomerReview from './utilities/Review/CustomerReview'

const Review = () => {

  const [reviewItems, setReviewItems] = useState([])

  const fetchData = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setReviewItems(data)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section id="review">
      <div className="main-container">
        <h1>Clients are Loving Our App</h1>

        <div  className="card-container">
            {reviewItems.map((item) => (
          <div key={item.id}className="card">
              
              <CustomerReview  item={item} />
              
          </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default Review