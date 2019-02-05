import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import classNames from 'classnames';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    if (this.props.children) {
      this.setState({ collapse: !this.state.collapse });
    }
  }

  render() {
    const { title, price, children: body, className } = this.props;

    return (
      <li
        className={classNames(className, { 'm-active': this.state.collapse })}
        onClick={this.toggle}
      >
        <h3 className="accordion-title">{title}</h3>
        <p className="accordion-price">{price}</p>
        <Collapse isOpen={this.state.collapse} className="accordion-content">
          {body}
        </Collapse>
      </li>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  price: PropTypes.string,
  className: PropTypes.string
};

export default Accordion;