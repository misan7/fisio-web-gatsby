import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { intersperse } from '../helpers';

export default class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div id="core">
        <Helmet title="Blog" />
        <div id="page-header">
          <div className="container">
            <h1>Blog</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {' '}
              {/* Change to col-md-8 to add the aside section */}
              <div id="page-content">
                <div className="blog-list">
                  {posts
                    .filter(
                      (post) =>
                        post.node.frontmatter.templateKey === 'blog-post'
                    )
                    .map(({ node: post }) => (
                      <article className="image" key={post.id}>
                        <header className="article-header">
                          <span className="article-date">
                            {post.frontmatter.date}
                          </span>
                          <h2 className="article-title">
                            <Link to={post.fields.slug}>
                              {post.frontmatter.title}
                            </Link>
                          </h2>
                        </header>
                        <div className="article-content various-content">
                          <p className="lead">{post.frontmatter.description}</p>
                          <p>{post.excerpt}</p>
                        </div>
                        <footer className="article-footer">
                          <ul className="article-info">
                            {/* <li className="author">Soraya</li> */}
                            <li className="categories">
                              {intersperse(post.frontmatter.tags)}
                            </li>
                          </ul>
                          <p className="article-more">
                            <Link to={post.fields.slug} className="c-button">
                              Leer más
                            </Link>
                          </p>
                        </footer>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            description
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
