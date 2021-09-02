import {Link} from 'react-router-dom';

const Menu = () => {
  return(
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">

        <Link to='/q1' className="navbar-item">
          Question 1
        </Link>

        <Link to='/q2' className="navbar-item">
          Question 2
        </Link>

        <Link to='/q3' className="navbar-item">
          Question 3
        </Link>

        <Link to='/q4' className="navbar-item">
          Question 4
        </Link>

        <Link to='/q5' className="navbar-item">
          Question 5
        </Link>
      </div>
    </div>
  )
}

export default Menu;