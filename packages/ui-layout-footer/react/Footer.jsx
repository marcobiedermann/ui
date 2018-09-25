import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../footer.css';

class Footer extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props;

    return (
      <footer
        className={styles.footer}
        role="contentinfo"
      >
        {children}
      </footer>
    );
  }
}

export default Footer;
