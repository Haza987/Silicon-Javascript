import React, { useState } from 'react'

const Questions = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-test">
      <div className={`faq-card ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggleOpen(0)}>
        <div className="question">
          <p>Is any of my personal information stored in the App?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 0 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quis fugit! Dolor aut, in inventore quibusdam dolore minus minima repudiandae quis doloribus veniam sint ipsa quia? Consectetur repellendus omnis natus.</p>
            </div>
          </div>
      </div>

      <div className={`faq-card ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggleOpen(1)}>
        <div className="question">
          <p>What formats can I download my transaction history in?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 1 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur excepturi debitis nemo a ipsam quibusdam ipsum possimus, ipsa provident!</p>
            </div>
          </div>

      </div>

      <div className={`faq-card ${openIndex === 2 ? 'open' : ''}`}onClick={() => toggleOpen(2)}>
        <div className="question">
          <p>Can I schedule future transfers?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 2 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus deserunt reiciendis quaerat fuga. Laudantium atque pariatur id quo consequatur quibusdam nostrum, obcaecati accusamus vero totam labore repellat saepe vel odit corporis eum culpa repellendus corrupti reprehenderit consectetur ducimus aperiam. Minus, dolores! Repellat autem recusandae nemo amet. Voluptatem, officia ipsa.</p>
            </div>
          </div>

      </div>

      <div className={`faq-card ${openIndex === 3 ? 'open' : ''}`}onClick={() => toggleOpen(3)}>
        <div className="question">
          <p>When can I use Banking App services?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 3 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid ipsum veniam blanditiis suscipit omnis quasi natus cupiditate rem, esse voluptatibus dolorum iusto exercitationem excepturi maiores repellat officia, fugiat beatae aspernatur adipisci modi eligendi. Repellat tempore dolorum reiciendis dicta labore?</p>
            </div>
          </div>

      </div>

      <div className={`faq-card ${openIndex === 4 ? 'open' : ''}`}onClick={() => toggleOpen(4)}>
        <div className="question">
          <p>Can I create my own password that is easy for me to remember?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 4 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolores quasi nemo omnis natus. Magnam tenetur, voluptatibus nostrum error doloremque possimus, quibusdam voluptas soluta nemo architecto atque quidem. Explicabo maxime magni totam magnam beatae at, eaque reiciendis accusamus? Quidem omnis ipsum harum earum, ratione odio. Doloremque laudantium expedita odit sequi hic consectetur eius! Repellendus at vitae dolorum consequatur, distinctio quasi.</p>
            </div>
          </div>

      </div>

      <div className={`faq-card ${openIndex === 5 ? 'open' : ''}`}onClick={() => toggleOpen(5)}>
        <div className="question">
          <p>What happens if I forget or lose my password?</p>
          <button className="btn-round" >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className={`answer ${openIndex === 5 ? 'open' : ''}`}>
            <div className="expandable">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut aperiam quisquam id voluptates ipsa! Deserunt vitae magnam deleniti laborum commodi non accusantium expedita.</p>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Questions