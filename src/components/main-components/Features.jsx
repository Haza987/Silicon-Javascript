import React from 'react'

function Features() {
  return (
    <section id ="features"> 
        <div class="main-container">
          <div class="container grid">
            <h1 class="item header">App Features</h1>
  
            <p class="item main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
  
            {/* <img src="Images/AFImages/phonecard.svg" alt="phone" class=" item phone"> */}
  
            <main class="item main1">
              {/* <img src="Images/AFImages/easypayments.svg" alt="easypayments" class="icon"> */}
              <div>
                <h3 class="subheader">Easy Payments</h3>
                <p class="subdescription">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </main>
  
            <main class="item main2">
              {/* <img src="Images/AFImages/datasecurity.svg" alt="Data Security" class="icon"> */}
              <div>
                <h3 class="subheader">Cost Statistics</h3>
                <p class="subdescription">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </main>
  
            <main class="item main3">
              {/* <img src="Images/AFImages/coststatistics.svg" alt="Cost Statistics" class="icon"> */}
              <div>
                <h3 class="subheader">Cost Statistics</h3>
                <p class="subdescription">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </main>
  
            <main class="item main4">
              {/* <img src="Images/AFImages/support.svg" alt="24/7 Support" class="icon"> */}
              <div>
                <h3 class="subheader">Support 24/7</h3>
                <p class="subdescription">A elementum, imperdiet enim, pretiumetiam facilisi in aenean quam mauris.</p>
              </div>
            </main>
  
            <main class="item main5">
              {/* <img src="Images/AFImages/regcashback.svg" alt="Regular Cashback" class="icon"> */}
              <div>
                <h3 class="subheader">Regular Cashback</h3>
                <p class="subdescription">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </main>
  
            <main class="item main6">
              {/* <img src="Images/AFImages/happy.svg" alt="Top Standards" class="icon"> */}
              <div>
                <h3 class="subheader">Top Standards</h3>
                <p class="subdescription">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </main>
         </div>
        </div>
      </section>
  )
}

export default Features