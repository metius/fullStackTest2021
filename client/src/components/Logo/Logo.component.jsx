import logo from '../../logo_mv.png';
import {Link} from 'react-router-dom';

const Logo = () => {
  return(
    <div className="navbar-brand">
      <Link to='/' className="navbar-item">
        <img src={logo} width="112" height="28" alt='logo'/>
      </Link>

      {/* <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link> */}
    </div>
  )
}

export default Logo;