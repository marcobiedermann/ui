import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './embed.css';

const Embed = ({ children, aspectRatio }) => (
  <div
    className={classNames(styles.embed, {
      [styles[`embed--${aspectRatio}`]]: aspectRatio,
    })}
  >
    {children}
  </div>
);

Embed.propTypes = {
  aspectRatio: PropTypes.string,
  children: PropTypes.node,
};

Embed.defaultProps = {
  aspectRatio: '',
  children: null,
};

export default Embed;
