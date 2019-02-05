import React from 'react';
import Link from 'gatsby-link';
import ContactForm from '../components/ContactForm';
import Helmet from 'react-helmet';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="core">
        <Helmet title="Contacto" />
        <div id="page-header">
          <div className="container">
            <h1>Contacto</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div id="page-content">
            <div className="various-content">
              <section>
                <h2>Localización</h2>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="c-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746.6737059866684!2d2.118527129255315!3d41.532550702626224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495a4c61069a7%3A0xb350a5f564612ab4!2sFisiocentre+Salut!5e0!3m2!1ses!2ses!4v1524147755263"
                        width="800"
                        height="600"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="c-icon-block">
                      <i className="ico fa fa-phone" />
                      <strong>Llámanos</strong>
                      <br /> 659 320 382
                      <br /> 931 374 282
                    </div>
                    <div className="c-icon-block">
                      <i className="ico fa fa-map-marker" />
                      <div className="icon-block-inner">
                        <p>
                          <strong>Fisiocentre Salut</strong>
                          <br /> Passeig de Rubió i Ors, 91
                          <br /> 08203 Sabadell, Barcelona{' '}
                        </p>
                      </div>
                    </div>
                    <div className="c-icon-block">
                      <i className="ico fa fa-clock-o" />
                      <div className="icon-block-inner">
                        <dl>
                          <dt>Lu - Vi:</dt>
                          <dd>9:30 - 13:00</dd>
                          <dt>Tardes:</dt>
                          <dd>15:30 - 21:00</dd>
                          <dt>Sábado:</dt>
                          <dd>Concertar</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2>Nuestras instalaciones</h2>
                <p>
                  Realiza una visita virtual a nuestro centro terapéutico desde
                  dónde podrás ver el interior de nuestras instalaciones.{' '}
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="c-map" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1527850743512!6m8!1m7!1sCAoSLEFGMVFpcE1wZ3hWVHlSeDhYeGpaMjRpc3BmZ1lvYW8zYnhsNVdRMHNVYjZa!2m2!1d41.53248903742995!2d2.11907810869252!3f321.8648003258195!4f-5.614284504002455!5f0.7820865974627469"
                      width="100%"
                      height="500"
                      frameBorder=""
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </section>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
