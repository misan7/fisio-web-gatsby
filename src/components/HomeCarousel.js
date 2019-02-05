import React from 'react';
import Carousel from './Carousel';
import Image from 'gatsby-image';
import { convertNodes } from '../helpers';

export default class HomeCarousel extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <Carousel loop margin={10} items={1} autoplay>
          {content &&
            content.map(({ title, subtitle, image }, index) => (
              <div className="slide slide-1" data-label={title} key={index}>
                <div className="slide-bg">
                  <div className="container">
                    <div className="slide-inner">
                      <div className="slide-content various-content textalign-left valign-middle">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <Image sizes={image.childImageSharp.sizes} />
              </div>
            ))}
        </Carousel>
      </div>
    );
  }
}
