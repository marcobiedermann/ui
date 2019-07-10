import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../media.css';

class Media extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return <div className={styles.media}>{children}</div>;
  }
}

export default Media;
