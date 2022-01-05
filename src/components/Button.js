import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component { // eslint-disable-line
  render() {
    return (
      <button onClick={this.props.handleClick} className={this.props.class} type="button">{this.props.text}</button> // eslint-disable-line
    );
  }
}

// PropTypes
Button.propTypes = {
  class: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  class: 'btn',
  text: '0',
};

export default Button;
