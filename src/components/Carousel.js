import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { isBrowser, isMobileOnly } from 'react-device-detect';

class Carousel extends Component {
  state = { show: false };

  componentDidMount() {
    if (window) {
      this.setState({ show: true });
    }
  }

  render() {
    if (!this.state.show) {
      return <div />;
    }

    const OwlCarousel = require('react-owl-carousel').default;

    let carouselOptions = {
      items: 2,
      URLhashListener: true
    };

    if (isBrowser) {
      carouselOptions = {
        ...carouselOptions,
        items: this.props.desktopitems || 3
      };
    } else if (isMobileOnly) {
      carouselOptions = {
        ...carouselOptions,
        items: this.props.mobileitems || 1
      };
    }

    const { props } = this;
    const { children, ...options } = props;

    return (
      <OwlCarousel
        id="main-slider"
        className="owl-theme"
        {...carouselOptions}
        {...options}
      >
        {children}
      </OwlCarousel>
    );
  }
}

Carousel.propTypes = {
  mobileitems: PropTypes.number,
  desktopitems: PropTypes.number
};

export default Carousel;
