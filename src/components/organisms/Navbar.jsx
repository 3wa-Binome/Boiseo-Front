import { useState } from "react";
import NavItem from '../molecules/NavItem';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <ul className="nav-menu">
                <NavItem icon={faBookmark} label='Dashboard' href="/" />
                <li className="nav-item account-menu">
                    <button
                        className="account-btn"
                        onClick={() => setOpen(o => !o)}
                        aria-haspopup="true"
                        aria-expanded={open}
                    >
                        <span><i className="fa fa-user" /></span>
                        Mon compte
                    </button>
                    {open && (
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout" onClick={() => setOpen(false)}>Logout</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Navbar;