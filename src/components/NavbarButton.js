import React, { Component } from 'react';
import Link from 'gatsby-link';

class NavButton extends Component {
  handleClick = () => this.props.onClick(this.props.linkTo);

  render() {
    const { location, linkTo } = this.props;

    return (
      <li
        className={
          location.pathname === linkTo || location.pathname === `${linkTo}/`
            ? 'm-active'
            : null
        }
        onClick={this.handleClick}
      >
        <span>
          <Link to={this.props.linkTo}>{this.props.name}</Link>
        </span>
      </li>
    );
  }
}
export default NavButton;
