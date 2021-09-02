const Alerts = ({status, title, message, onClick}) => {
  return(
    <div className={`modal ${status ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        
        <div className="card">
          <div className="card-content">
            <p className="title">
              {title}
            </p>
            <p className="subtitle">
              {message}
            </p>
          </div>
        </div>

      </div>
      <button 
        className="modal-close is-large" 
        aria-label="close"
        onClick={onClick}
      ></button>
    </div>
  )
}

export default Alerts;