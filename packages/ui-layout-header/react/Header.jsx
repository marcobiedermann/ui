import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../header.css';

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <header className={styles.header} role="banner">
        {children}
      </header>
    );
  }
}

export default Header;
