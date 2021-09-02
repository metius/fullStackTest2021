import {Link} from 'react-router-dom'

const Card = (props) => {
  const {question} = props;
  return(
    <div className="card">
      <div className="card-content">
        <Link to={`/q${question}`}>
          <p className="title">
            Question {question}
          </p>
        </Link>        
      </div>
    </div>
  )
}

export default Card;