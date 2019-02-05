import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { convertNodes } from '../helpers';

import Navbar from '../components/Navbar';
import AboutSubscribe from '../components/AboutSubscribe';
import Footer from '../components/Footer';

import '../scss/index.scss';
import 'font-awesome/css/font-awesome.min.css';

const TemplateWrapper = ({
  children,
  location,
  data: {
    site: {
      siteMetadata: { title }
    },
    allFile
  }
}) => {
  const images = convertNodes(allFile);

  return (
    <div>
      <Helmet defaultTitle={`${title}`} titleTemplate={`%s | ${title}`} />
      <Navbar images={images} location={location} />
      <div>
        <div id="wrapper">
          {children()}
          <AboutSubscribe />
        </div>
      </div>
      <Footer title={title} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const TemplateWrapperQuery = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { id: { regex: "/src/images/" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
