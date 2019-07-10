import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../button.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    disabled: false,
  };

  render() {
    const { children, disabled } = this.props;

    return (
      <button className={classNames(styles.button)} type="button" disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default Button;
