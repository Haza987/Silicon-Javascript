import React from 'react'
import { NavLink } from 'react-router-dom'
import QuestionsBlock from './utilities/FAQ/QuestionsBlock'

function Faq() {
  return (
    <section id="faq">
      <h1 className="header">Any questions? Check out the FAQs</h1>

      <div className="desktop-header">
        <h1>Any questions?</h1>
        <h1> Check out the FAQs</h1>
      </div>

      <p className="undertext">Still have unanswered questions and need to get in touch?</p>

      <div className="cards">
        <div className="phone">
          <img src="/src/Images/FAQImages/phone.svg" alt="phone"></img>
          <p>Still have  questions?</p>
          <NavLink className="nav-link" to="/contact">Contact us <i className="fa-solid fa-arrow-right"></i></NavLink>
        </div>

        <div className="chat">
          <img src="/src/Images/FAQImages/chat.svg" alt="chat"></img>
          <p>Don't like phone calls?</p>
          <NavLink className="nav-link" to="/contact">Contact us <i className="fa-solid fa-arrow-right"></i></NavLink>
        </div>
      </div>

      <QuestionsBlock />

      <NavLink to="/contact"><button className='contactus bgc'> Contact us now</button></NavLink>
    </section>
  )
}

export default Faq