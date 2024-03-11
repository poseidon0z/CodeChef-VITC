import React from 'react';
import '../../Styles/Navbar.css';

const nNavbar = () => {
  return (
    <>
      <header>
        <div className="leftHeader">
          <div className="headerLogo">
            <a href="/" className="laptop-logo">
              <img
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="CodeChef Logo"
              />
            </a>
            <a href="/" className="mobile-logo">
              <img
                src="https://cdn.codechef.com/images/cc-logo-mobile-1.svg"
                alt="CodeChef Logo"
              />
            </a>
          </div>
        </div>
        <div className="rightHeader">
          <div className="headerBtn">
            <a href="/joinus">Join Us!</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default nNavbar;
