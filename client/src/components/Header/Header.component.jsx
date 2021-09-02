import Logo from '../Logo/Logo.component';
import Menu from '../Menu/Menu.component';

const Header = () =>  {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Logo />
      <Menu />
    </nav>
  )
}

export default Header;