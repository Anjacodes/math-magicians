/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ handleClick, addClass, text }) => (
  <button onClick={handleClick} className={addClass} type="button">{text}</button>
);

// PropTypes
Button.propTypes = {
  addClass: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  addClass: 'btn',
  text: '0',
};

export default Button;
