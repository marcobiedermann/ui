import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../button.css';

const Button = ({ children, disabled }) => (
  <button
    className={classNames(styles.button)}
    type="button"
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  disabled: false,
};

export default Button;
