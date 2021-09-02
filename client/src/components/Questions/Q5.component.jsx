import dbSchema from '../../images/SQL_Diagram.png';
import SqlCreateDbCode from '../SQL/SqlCreateDbCode.component';
import SqlGetPlayers from '../SQL/SqlGetPlayers.component copy';

const Q5 = () => {
  return(
    <>
      <div className='content'>
        <h1>Question 5</h1>
        <p>SQL part</p>        
      </div>
      <div className='block'>
        <div className='card'>
          <header className="card-header">
            <p className="card-header-title">
              DB Schema
            </p>
          </header>
          <div className="card-content">
            <div className="content ">
              <div className="is-flex is-justify-content-space-around">
                <img src={dbSchema} alt='Casino DB Schema' width='100%' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block'>
        <div className='card'>
          <header className="card-header">
            <p className="card-header-title">
              SQL Queries to create DB and tables
            </p>
          </header>
          <div className="card-content">
            <div className="content ">
              <SqlCreateDbCode />
            </div>
          </div>
        </div>
      </div>
      <div className='block'>
        <div className='card'>
          <header className="card-header">
            <p className="card-header-title">
            A SQL query to get all players that have games of type “SLOT” as their favorite games.
            </p>
          </header>
          <div className="card-content">
            <div className="content ">              
              <SqlGetPlayers />              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Q5;