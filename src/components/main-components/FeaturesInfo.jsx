import React from 'react'

function Features() {
  return (
    <section id ="features"> 
        <div className="main-container">
          <div className="container grid">
            <h1 className="item header">App Features</h1>
  
            <p className="item main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
  
            <img src="/src/Images/AFImages/phonecard.svg" alt="phone" className=" item phone"></img>
  
            <main className="item main1">
              <img src="/src/Images/AFImages/easypayments.svg" alt="easypayments" className="icon"></img>
              <div>
                <h3 className="subheader">Easy Payments</h3>
                <p className="subdescription">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </main>
  
            <main className="item main2">
              <img src="/src/Images/AFImages/datasecurity.svg" alt="Data Security" className="icon"></img>
              <div>
                <h3 className="subheader">Cost Statistics</h3>
                <p className="subdescription">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </main>
  
            <main className="item main3">
              <img src="/src/Images/AFImages/coststatistics.svg" alt="Cost Statistics" className="icon"></img>
              <div>
                <h3 className="subheader">Cost Statistics</h3>
                <p className="subdescription">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </main>
  
            <main className="item main4">
              <img src="/src/Images/AFImages/support.svg" alt="24/7 Support" className="icon"></img>
              <div>
                <h3 className="subheader">Support 24/7</h3>
                <p className="subdescription">A elementum, imperdiet enim, pretiumetiam facilisi in aenean quam mauris.</p>
              </div>
            </main>
  
            <main className="item main5">
              <img src="/src/Images/AFImages/regcashback.svg" alt="Regular Cashback" className="icon"></img>
              <div>
                <h3 className="subheader">Regular Cashback</h3>
                <p className="subdescription">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </main>
  
            <main className="item main6">
              <img src="/src/Images/AFImages/happy.svg" alt="Top Standards" className="icon"></img>
              <div>
                <h3 className="subheader">Top Standards</h3>
                <p className="subdescription">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </main>
         </div>
        </div>
      </section>
  )
}

export default Features