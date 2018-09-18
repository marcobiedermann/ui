import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './media.css';

const Media = ({ children }) => (
  <div className={styles.media}>
    {children}
  </div>
);

Media.propTypes = {
  children: PropTypes.node,
};

Media.defaultProps = {
  children: null,
};

const MediaObject = ({ children, modifier }) => (
  <div
    className={classNames(styles.media__object, {
      [styles[`media__object--${modifier}`]]: modifier,
    })}
  >
    {children}
  </div>
);

MediaObject.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.string,
};

MediaObject.defaultProps = {
  children: null,
  modifier: 'left',
};

const MediaBody = ({ children }) => (
  <div className={styles.media__body}>
    {children}
  </div>
);

MediaBody.propTypes = {
  children: PropTypes.node,
};

MediaBody.defaultProps = {
  children: null,
};

export default Media;
export {
  MediaObject,
  MediaBody,
};
