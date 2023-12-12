import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';

function NavBar() {
  const { user, handleLogout } = useContext(SiteContext);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mb-3"
        data-bs-theme="dark"
      >
        <div className="container d-flex justify-content-between">
          <Link style={{ color: 'orange' }} className="nav-link" to="/">
            <b>Ayhando</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      🛍️ Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="btn nav-link">
                      Logout ({user.name})
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.ayhanmetin.eu/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>About</b>
                </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
