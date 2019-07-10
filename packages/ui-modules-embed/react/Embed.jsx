import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../embed.css';

class Embed extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    aspectRatio: '',
    children: null,
  };

  render() {
    const { children, aspectRatio } = this.props;

    return (
      <div
        className={classNames(styles.embed, {
          [styles[`embed--${aspectRatio}`]]: aspectRatio,
        })}
      >
        {children}
      </div>
    );
  }
}

export default Embed;
