import React from 'react'

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
                  <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                </div>
      
                <div className="chat">
                  <img src="/src/Images/FAQImages/chat.svg" alt="chat"></img>
                  <p>Don't like phone calls?</p>
                  <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
    
            <div className="questions">
  
              <div className="faq1 closed">
                <h6 className="question"> Is any of my personal information stored in the App?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
  
              <div className="faq1-open closed">
                <h6 className="question"> Is any of my personal information stored in the App?</h6>
                <span className="btn-circle open">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
              </div>
  
              <div className="faq1-open answer">
                <p className="para1">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                <></>
                <p className="para2">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
              </div>
    
              <div className="faq2 closed">
                <h6 className="question">What formats can I download my transaction history in?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
  
              <div className="faq3 closed">
                <h6 className="question">Can I schedule future transfers?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div className="faq3-open closed">
                <h6 className="question">Can I schedule future transfers?</h6>
    
                <span className="btn-circle open">
                  <i className="fa-solid fa-chevron-up"></i>
                </span>
                
              </div>
  
              <div className="faq3-open answer">
                <p className="answer3">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
              </div>
              
              <div className="faq4 closed">
                <h6 className="question">When can I use Banking App services?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div className="faq5 closed">
                <h6 className="question">Can I create my own password that is easy for me to remember?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div className="faq6 closed">
                <h6 className="question">What happens if I forget or lose my password?</h6>
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <a className="contactus bgc">Contact us now</a>         
          
        </div>
      </section>
  )
}

export default Faq