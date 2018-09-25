import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../media.css';

class MediaBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.media__body}>
        {children}
      </div>
    );
  }
}

export default MediaBody;
