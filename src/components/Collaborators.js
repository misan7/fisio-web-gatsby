import React from 'react';
import Image from 'gatsby-image';

export default class Collaborators extends React.Component {
  render() {
    if (!this.props.content) {
      return <div />;
    }

    const {
      content: { title, subtitle, images }
    } = this.props;

    return (
      <div id="core">
        <div id="page-content">
          <div className="various-content">
            <section>
              <header>
                <div className="container">
                  <h2>{title}</h2>
                  <p className="subtitle">{subtitle}</p>
                </div>
              </header>
              <div className="container">
                <div className="row">
                  {images &&
                    images.map(({ title, image }, index) => (
                      <div className="col-sm-3" key={index}>
                        <div className="textalign-center">
                          <a className="no-border">
                            <Image sizes={image.childImageSharp.sizes} />
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
