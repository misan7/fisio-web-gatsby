import React from 'react';
import Carousel from './Carousel';
import Modal from './Modal';
import Image from 'gatsby-image';

import { convertNodes } from '../helpers';

export default class GalleryCarousel extends React.Component {
  render() {
    const {
      content: { title, subtitle, images }
    } = this.props;
    return (
      <div>
        <div id="core">
          <div id="page-content">
            <div className="various-content">
              <section>
                <header>
                  <div className="container">
                    <h2>{title}</h2>
                    <p className="subtitle">{subtitle}</p>
                    {/*  <p className="more">
									<a href="#" className="c-button m-type-2">Entra en la Galería</a>
								</p>  */}
                  </div>
                </header>

                <div
                  className="c-gallery m-paginated"
                  data-items="4"
                  data-items-desktop="4"
                  data-items-desktop-small="3"
                  data-items-tablet="2"
                  data-items-mobile="1"
                >
                  <div className="thumb-list">
                    <Carousel mobileitems={2} desktopitems={4}>
                      {images.map(({ title, image }, index) => {
                        return (
                          <div className="thumb" key={index}>
                            <Modal
                              content={
                                <Image
                                  resolutions={
                                    image.childImageSharp.resolutions
                                  }
                                />
                              }
                            >
                              <Image sizes={image.childImageSharp.sizes} />
                            </Modal>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
