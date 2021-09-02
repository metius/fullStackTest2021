import GoBackBtn from '../buttons/GoBackBtn/GoBackBtn.component';

const CountryCard = ({country}) => {  
  const {flag, name, nativeName, region, area, capital} = country;
  const cardStyle = {
    display: 'flex', 
    justifyContent: 'space-between',
    padding: '.5rem'
  };
  
  return(    
    <>
    <GoBackBtn  />
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {`${name} [${nativeName}]`}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <dl>
            <div style={cardStyle}>
              <dt className='has-text-weight-bold'>Name:</dt>
              <dd>{name}</dd>
            </div>
            <div style={cardStyle}>
              <dt className='has-text-weight-bold'>Region:</dt>
              <dd>{region}</dd>
            </div>
            <div style={cardStyle}>
              <dt className='has-text-weight-bold'>Area:</dt>
              <dd>{area}</dd>
            </div>
            <div style={cardStyle}>
              <dt className='has-text-weight-bold'>Capital:</dt>
              <dd>{capital}</dd>
            </div>
            <div style={cardStyle}>
              <dt className='has-text-weight-bold'>Flag:</dt>
              <dd>
                <img src={flag} style={{width: 100 }} alt={`${name} flag`}/>
              </dd>
            </div>
            <div>
              <dt className='has-text-weight-bold'></dt>
              <dd></dd>
            </div>
          </dl>
          <br />
        </div>
      </div>
    </div>
    </>
  )
}

export default CountryCard;