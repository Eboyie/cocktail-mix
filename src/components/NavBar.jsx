import { NavLink, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

function NavBar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <span className="logo">Cocktail</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

export default NavBar;
