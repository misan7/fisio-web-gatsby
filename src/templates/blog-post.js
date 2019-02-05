import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';
import { intersperse } from '../helpers';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div id="core">
      <Helmet title={title + ' | Blog'} />
      <div id="page-header">
        <div className="container">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <ul className="breadcrumbs">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-8"> */}
          <div id="page-content">
            <div className="blog-detail">
              <article className="image">
                <div className="article-image">
                  <img src={image} />
                </div>

                <div className="article-content various-content">
                  <p className="lead">{description}</p>
                  <PostContent content={content} />
                </div>

                <footer className="article-footer">
                  <ul className="article-info">
                    <li className="date">{date}</li>
                    {/* <li className="author">Soraya</li> */}
                    <li className="categories">{intersperse(tags)}</li>
                  </ul>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      date={post.frontmatter.date}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
        description
        tags
      }
    }
  }
`;
