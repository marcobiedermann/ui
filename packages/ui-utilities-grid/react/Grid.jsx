import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../grid.css';

class Grid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return <div className={styles.grid}>{children}</div>;
  }
}

export default Grid;
