import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { filter, map } from 'lodash';

const Image = ({ images, name, type = 'thumb' }) => {
  const [image] = filter(images, {
    name
  });

  if (!image) {
    return <div />;
  }

  return (
    <ImagesContext.Consumer>
      <Img resolutions={image.childImageSharp[type]} />
    </ImagesContext.Consumer>
  );
};

Image.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string
};

export default Image;
