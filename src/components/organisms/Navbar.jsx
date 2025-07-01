import NavItem from '../molecules/NavItem';
import { faUser, faBookmark} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <header className="navbar">
      <ul className="nav-menu">
        <NavItem icon={faBookmark} label='Dashboard' href="/" />
        <NavItem icon={faUser} label="My account" href="/" />
      </ul>
    </header>
  );
};

export default Navbar;
