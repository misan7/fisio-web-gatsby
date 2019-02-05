import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Footer = ({ title }) => (
  <div id="wrapper">
    <footer id="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6 col-md-push-6">
              <nav className="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Aviso Legal</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy-ext">Política de Privacidad</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <div className="footer-text">
                <p>
                  Web Page made by
                  <a> botspecialist</a> © 2018, {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

Footer.propTypes = {
  title: PropTypes.string
};

export default Footer;
