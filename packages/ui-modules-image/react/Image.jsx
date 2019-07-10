import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import '../image.css';

class Image extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const { alt, src, ...other } = this.props;

    return <img src={src} alt={alt} {...other} />;
  }
}

export default Image;
