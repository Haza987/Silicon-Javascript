import React from 'react'
import { Link } from 'react-router-dom'

const QuestionData = ({item}) => {
  return (
    <Link to={`/FAQ/${item.id}`}>
      <div className="item">
        <div className="title">
          <h3>{item.title}</h3>
        </div>
        <div className="content">
          <p>{item.content}</p>
        </div>
      </div>
    </Link>
  )
}

export default QuestionData