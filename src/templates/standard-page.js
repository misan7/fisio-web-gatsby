import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Link from 'gatsby-link';

export const StandardPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div id="core" className="core-bg-1">
      <Helmet title={title} />
      <div id="page-header">
        <div className="container">
          <h1>{title}</h1>
          <ul className="breadcrumbs">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div id="page-content">
          <div className="various-content">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

StandardPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const StandardPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <StandardPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

StandardPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StandardPage;

export const standardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
