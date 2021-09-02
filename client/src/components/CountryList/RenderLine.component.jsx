import {Link} from 'react-router-dom';
import './RenderList.style.css';

const RenderLine = ({country}) => {
  return(
    <p className="is-flex is-justify-content-space-between list__item">
      <Link to={{
        pathname: `/country/${country.name}`,
        state: {
          country: country
        }
      }}>
        <span className="card-header-title">
          {country.name}
        </span>
      </Link>
      <img src={country.flag} alt={`${country.name} flag`} width='50px'/>
    </p>
  )
}

export default RenderLine;