import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../context/userContext";
import authApi from "../api/auth";
import '../css/navbar.css';
import { FaShoppingCart, FaRegUser, FaSearch } from "react-icons/fa";

function NavBar() {
    const { user, setUser } = useContext(userContext);

    const handleLogout = () => {
        setUser(null);
        authApi.deleteToken();
    };

    return (
        <div>
            {/* Navbar section */}
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                <Link className="navbar-brand ml-2 font-weight-bold" to="/">
                    <span className="burgundy">Shop</span><span className="orange">Ease</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor"
                        aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                    <ul className="navbar-nav">
                        <li className="nav-item rounded bg-light search-nav-item">
                            <input type="text" id="search" className="bg-light"
                                   placeholder="Search Among products"/><span className="fa fa-search text-muted"/>
                        </li>

                        <div className="dropdown">
                            <button className="nav-link btn btn-link dropdown-toggle" id="authentication"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="far fa-user"/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="authentication">
                                {user ?
                                    <li>
                                        <button className="btn btn-link dropdown-item" onClick={handleLogout}>Logout
                                        </button>
                                    </li>
                                    :
                                    <>
                                        <li><Link to="/login" className="dropdown-item">Login</Link></li>
                                        <li><Link to='/register' className="dropdown-item">Register</Link></li>
                                    </>
                                }
                            </ul>
                        </div>

                        <li className="nav-item ">
                            <Link to='/cart' className="nav-link">
                                <span className="fa fa-shopping-cart"/><span className="text">Cart</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
