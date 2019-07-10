import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../media.css';

class MediaObject extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    modifier: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    modifier: 'left',
  };

  render() {
    const { children, modifier } = this.props;

    return (
      <div
        className={classNames(styles.media__object, {
          [styles[`media__object--${modifier}`]]: modifier,
        })}
      >
        {children}
      </div>
    );
  }
}

export default MediaObject;
