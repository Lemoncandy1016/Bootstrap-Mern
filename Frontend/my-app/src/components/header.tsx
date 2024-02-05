import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Check if authToken exists in localStorage
  const authToken = localStorage.getItem("authToken");
  const isAuthenticated = authToken !== null;
  const navigate = useNavigate();
  const logouttrigger = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div id="wrapper">
      <header>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand">
                <img src="assets/img/logo.png" alt="logo" />
              </div>
            </div>
            <div className="navbar-collapse collapse ">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                {isAuthenticated ? (
                  <li onClick={logouttrigger}>
                    <a>Logout</a>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
