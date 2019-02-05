import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

import HomeCarousel from '../components/HomeCarousel';
import ServicesCarousel from '../components/ServicesCarousel';
import GalleryCarousel from '../components/GalleryCarousel';
import Collaborators from '../components/Collaborators';

export const HomeTemplate = ({
  content,
  contentComponent,
  title,
  carousel,
  services,
  gallery,
  collaborators,
  date
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <HomeCarousel content={carousel} />
      <ServicesCarousel content={services} />
      <GalleryCarousel content={gallery} />
      <Collaborators content={collaborators} />
    </div>
  );
};

HomeTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const Home = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <HomeTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      carousel={post.frontmatter.carousel}
      services={post.frontmatter.servicesList}
      gallery={post.frontmatter.gallery}
      collaborators={post.frontmatter.collaborators}
      date={post.frontmatter.date}
    />
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    markdownRemark(id: { regex: "/home/" }) {
      html
      frontmatter {
        title
        carousel {
          title
          subtitle
          image {
            childImageSharp {
              sizes(maxWidth: 1008) {
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
