import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Accordion from '../components/Accordion';

export const ServicePageTemplate = ({
  image,
  title,
  heading,
  description,
  services
}) => (
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
          <section id="fisiotherapy">
            {services &&
              services.length &&
              services.map(({ title, image, products }, index) => {
                return (
                  <div key={index}>
                    <h2>{title}</h2>

                    <div className="row">
                      <div className="col-sm-2">
                        <p className="textalign-center margin-sides-auto max-width-180">
                          <img src={image} className="rounded" />
                        </p>
                      </div>

                      <div className="col-sm-10">
                        <ul className="c-accordion">
                          {products &&
                            products.length &&
                            products.map(({ title, price, content }, index) => {
                              return (
                                <Accordion
                                  key={index}
                                  className="m-has-price"
                                  title={title}
                                  price={price}
                                >
                                  {content}
                                </Accordion>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  </div>
);

ServicePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array
};

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ServicePageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      services={frontmatter.services}
    />
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        services {
          title
          image
          products {
            title
            price
            content
          }
        }
      }
    }
  }
`;
