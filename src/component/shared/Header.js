import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    const navItem = (
      <>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="appointment">Appointment</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        {user ? (
          <li>
            <button onClick={() => signOut(auth)}>Sign Out</button>
          </li>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
        
      </>
    );
    return (
      <header>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl md:text-3xl">
              Doctors Portal
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{navItem}</ul>
          </div>
        </div>
      </header>
    );
};

export default Header;