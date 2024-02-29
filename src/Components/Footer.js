import React from 'react';
import logo from '../Asstes/cc-logo.svg';
import '../Styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="doublecol">
        <div className="column">
          <div className="center">
            <img src={logo} alt="Codechef club logo"></img>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              dolore rerum porro repellendus
            </p>
            <p>copyright text</p>
          </div>
        </div>
        <div className="column event">
          <div className="center">
            <h3>Events</h3>
            <p>Event name 1</p>
            <p>Event name 2</p>
            <p>Event name 3</p>
          </div>
        </div>
      </div>
      <div className="doublecol">
        <div className="column">
          <div className="center">
            <h3>Blogs</h3>
            <p>Blog name 1</p>
            <p>Blog name 2</p>
            <p>Blog name 3</p>
          </div>
        </div>
        <div className="column">
          <div className="center">
            <h3>Socials</h3>
            <div className="socials">
              <a href="https://in.linkedin.com/company/codechef-vitc">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="4x"
                  inverse
                  fixedWidth
                  className="icon"
                />
              </a>
              <a href="https://www.instagram.com/codechefvit/?hl=en">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size="4x"
                  inverse
                  fixedWidth
                  className="icon"
                />
              </a>
              <a href="mailto:example@example.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="4x"
                  inverse
                  fixedWidth
                  className="icon"
                />
              </a>
              <a href="https://twitter.com/codechefvit">
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  size="4x"
                  inverse
                  fixedWidth
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
