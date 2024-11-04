import React, { useState, useEffect } from 'react'

const QuestionsBlock = () => {

  const [questionItems, setQuestionItems] = useState([])

  const fetchData = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setQuestionItems(data)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className='faq-block'>
      {questionItems.map((item, index) => (
        <div key={item.id} className={`faq-card ${openIndex === index ? 'open' : ''}`} onClick={() => toggleOpen(index)} >
          <div className="question">
            <p>{item.title}</p>

            <button className="btn-round" >
             <i className="fa-solid fa-chevron-down"></i>
           </button>

          </div>

          <div className={`answer ${openIndex === index ? 'open' : ''}`}>
            <div className="expandable">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default QuestionsBlock