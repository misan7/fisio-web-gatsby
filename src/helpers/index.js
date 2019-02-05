import React from 'react';
import { kebabCase, groupBy, keyBy, map } from 'lodash';
import Img from 'gatsby-image';

export const intersperse = (arr, sep = ', ') => {
  if (arr.length === 0) {
    return [];
  }

  return arr
    .slice(1)
    .reduce(
      function(xs, x, i) {
        return xs.concat([sep, x]);
      },
      [arr[0]]
    )
    .map((tag, index) => (
      <span key={index} to={`/tags/${kebabCase(tag)}/`}>
        {tag}
      </span>
    ));
};

export const convertNodes = (object) => {
  const nodes = keyBy(map(object.edges, 'node'), 'name');

  return {
    show: ({ name, type = 'thumb', ...options }) => (
      <Img
        resolutions={
          nodes[name].childImageSharp[type] ||
          nodes[name].childImageSharp.resolutions
        }
        {...options}
      />
    ),
    sizes: ({ name, ...options }) => (
      <Img sizes={nodes[name].childImageSharp.sizes} {...options} />
    ),
    get: ({ name, type = 'original' }) =>
      nodes[name].childImageSharp[type] || nodes[name].childImageSharp,
    map: (callback) => map(nodes, callback)
  };
};
