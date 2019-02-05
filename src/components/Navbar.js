import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import Image from 'gatsby-image';

import NavButton from './NavbarButton.js';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isHeaderContactHidden: true,
      isMenuHidden: true
    };
  }

  toggleContactHidden() {
    this.setState({
      isHeaderContactHidden: !this.state.isHeaderContactHidden
    });
  }

  toggleMenuHidden() {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    });
  }

  handleClick = (index) => this.setState({ activeIndex: index });

  render() {
    const { isHeaderContactHidden, isMenuHidden } = this.state;
    const { images } = this.props;
    const { location } = this.props;

    return (
      <header
        id="header"
        className={classNames('m-animated', {
          'm-has-active-panel': !isHeaderContactHidden
        })}
      >
        <div className="header-bg">
          <div className="header-inner">
            <div className="header-branding">
              <Link to="/">{images.sizes({ name: 'logo' })}</Link>
            </div>

            <div className="header-navigation">
              <nav className="header-menu">
                <button
                  onClick={() => this.toggleMenuHidden()}
                  className={classNames('header-menu-toggle', {
                    'm-active': !isMenuHidden
                  })}
                  type="button"
                >
                  <i className="fa fa-bars" />MENU
                </button>
                <ul style={{ display: isMenuHidden ? 'none' : 'block' }}>
                  <NavButton
                    name="Inicio"
                    linkTo="/"
                    location={location}
                    onClick={this.handleClick}
                  />
                  <NavButton
                    name="Servicios"
                    linkTo="/service"
                    location={location}
                    onClick={this.handleClick}
                  />
                  <NavButton
                    name="Blog"
                    linkTo="/blog"
                    location={location}
                    onClick={this.handleClick}
                  />
                  <NavButton
                    name="Contacto"
                    linkTo="/contact"
                    location={location}
                    onClick={this.handleClick}
                  />
                </ul>
              </nav>
            </div>
            <div className="header-panel">
              <button
                onClick={() => this.toggleContactHidden()}
                className={classNames('header-panel-toggle', {
                  'm-active': !isHeaderContactHidden
                })}
                type="button"
              >
                <i className="fa" />
              </button>
              <div
                className="header-contact"
                style={{
                  display: this.state.isHeaderContactHidden ? 'none' : 'block'
                }}
              >
                <ul>
                  <li>
                    <div className="item-inner">
                      <i className="ico fa fa-phone" />
                      <a href="tel:+659320382">
                        <strong>659 320 382</strong>
                      </a>
                      <br />
                      <a href="tel:+931374282">
                        <strong>931 374 282</strong>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item-inner">
                      <a
                        href="https://goo.gl/maps/PmFxMLUwWcM2"
                        target="_blank"
                      >
                        <i className="ico fa fa-map-marker" />
                      </a>
                      <a
                        href="https://goo.gl/maps/PmFxMLUwWcM2"
                        target="_blank"
                      >
                        <strong>FisioCentre Salut</strong>
                      </a>
                      <br /> Passeig de Rubió i Ors, 91
                      <br /> 08203 Sabadell, Barcelona
                    </div>
                  </li>
                  <li>
                    <div className="item-inner">
                      <i className="ico fa fa-clock-o" />
                      <dl>
                        <dt>Lu - Vi:</dt>
                        <dd>9:30 - 13:00</dd>
                        <dt>Tardes:</dt>
                        <dd>15:30 - 21:00</dd>
                        <dt>Sábado:</dt>
                        <dd>Concertar</dd>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="header-social"
                style={{
                  display: this.state.isHeaderContactHidden ? 'none' : 'block'
                }}
              >
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/fisiocentresalutsabadell/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fisiocentre_salut/"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
