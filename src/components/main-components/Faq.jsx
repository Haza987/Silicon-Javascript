import React from 'react'

function Faq() {
  return (
    <section id="faq">
          <h1 class="header">Any questions? Check out the FAQs</h1>
              <div class="desktop-header">
                <h1>Any questions?</h1>
                <h1> Check out the FAQs</h1>
              </div>
    
              <p class="undertext">Still have unanswered questions and need to get in touch?</p>
    
              <div class="cards">
                <div class="phone">
                  {/* <img src="Images/FAQImages/phone.svg" alt="phone"> */}
                  <p>Still have  questions?</p>
                  <span>Contact us <i class="fa-solid fa-arrow-right"></i></span>
                </div>
      
                <div class="chat">
                  {/* <img src="Images/FAQImages/chat.svg" alt="chat"> */}
                  <p>Don't like phone calls?</p>
                  <span>Contact us <i class="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
    
            <div class="questions">
  
              <div class="faq1 closed">
                <h6 class="question"> Is any of my personal information stored in the App?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
  
              <div class="faq1-open closed">
                <h6 class="question"> Is any of my personal information stored in the App?</h6>
                <span class="btn-circle open">
                  <i class="fa-solid fa-chevron-up"></i>
                </span>
              </div>
  
              <div class="faq1-open answer">
                <p class="para1">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                <></>
                <p class="para2">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
              </div>
    
              <div class="faq2 closed">
                <h6 class="question">What formats can I download my transaction history in?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
  
              <div class="faq3 closed">
                <h6 class="question">Can I schedule future transfers?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div class="faq3-open closed">
                <h6 class="question">Can I schedule future transfers?</h6>
    
                <span class="btn-circle open">
                  <i class="fa-solid fa-chevron-up"></i>
                </span>
                
              </div>
  
              <div class="faq3-open answer">
                <p class="answer3">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
              </div>
              
              <div class="faq4 closed">
                <h6 class="question">When can I use Banking App services?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div class="faq5 closed">
                <h6 class="question">Can I create my own password that is easy for me to remember?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <div class="faq6 closed">
                <h6 class="question">What happens if I forget or lose my password?</h6>
                <span class="btn-circle">
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
    
              <a class="contactus bgc">Contact us now</a>         
          
        </div>
      </section>
  )
}

export default Faq