import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.data);
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Ironcommerce</Link>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          {!user && (
            <li className="">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          <li uk-toggle="target: #cart">
            <span uk-icon="cart" />
          </li>
          {user && (
            <li>
              <Link to="/profile">Username</Link>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <button className="uk-button uk-button-default">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
