import React from 'react';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/home-page';

export default class IndexPage extends React.Component {
  render() {
    return <HomeTemplate {...this.props} />;
  }
}

export const pageQuery = graphql`
         query IndexQuery {
           markdownRemark(id: { regex: "/home/" }) {
             html
             frontmatter {
               title
               carousel {
                 title
                 subtitle
                 image {
                   childImageSharp {
                     sizes(maxWidth: 1008, duotone: { highlight: "#ffffff", shadow: "#ffffff", opacity: 50 }) {
                       ...GatsbyImageSharpSizes
                     }
                   }
                 }
               }
               servicesList {
                 title
                 subtitle
                 products {
                   title
                   subtitle
                   link
                   image {
                     childImageSharp {
                       sizes(maxWidth: 300) {
                         ...GatsbyImageSharpSizes
                       }
                     }
                   }
                 }
               }
               gallery {
                 title
                 subtitle
                 images {
                   title
                   image {
                     childImageSharp {
                       sizes(maxWidth: 600) {
                         ...GatsbyImageSharpSizes
                       }
                       resolutions(width: 800) {
                         ...GatsbyImageSharpResolutions
                       }
                     }
                   }
                 }
               }
               collaborators {
                 title
                 subtitle
                 images {
                   title
                   image {
                     childImageSharp {
                       sizes(maxWidth: 600) {
                         ...GatsbyImageSharpSizes
                       }
                       resolutions(width: 800) {
                         ...GatsbyImageSharpResolutions
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `;
