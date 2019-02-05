import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Carousel from './Carousel';
import Image from 'gatsby-image';

export default class ServicesCarousel extends React.Component {
  render() {
    const {
      content: { title, subtitle, products }
    } = this.props;

    return (
      <div id="core">
        <div id="page-content">
          <div className="various-content">
            <section>
              <header>
                <div className="container">
                  <h2>{title}</h2>
                  <p className="subtitle">{subtitle}</p>
                  {/*  <p className="more"><a href="#" className="c-button m-type-2">Ver nuestras tarifas</a></p> */}
                </div>
              </header>
              <div>
                <div className="container">
                  <div className="service-list-inner">
                    <Carousel>
                      {products &&
                        products.map(
                          ({ title, subtitle, link, image }, index) => (
                            <div className="service-list-item" key={index}>
                              <div className="c-service">
                                <div className="service-image">
                                  {image && link ? (
                                    <Link to={link}>
                                      <Image
                                        sizes={image.childImageSharp.sizes}
                                      />
                                    </Link>
                                  ) : (
                                    <Image
                                      sizes={image.childImageSharp.sizes}
                                    />
                                  )}
                                </div>
                                <h3 className="service-title">
                                  {link ? (
                                    <Link to={link}>{title}</Link>
                                  ) : (
                                    <a style={{ color: '#935ca3' }}>{title}</a>
                                  )}
                                </h3>
                                <div className="service-description">
                                  <p>{subtitle}</p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                    </Carousel>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
