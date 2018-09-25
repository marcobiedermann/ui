import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../grid.css';

class GridColumn extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    span: PropTypes.number,
  }

  static defaultProps = {
    children: null,
    span: 0,
  }

  render() {
    const { children, span } = this.props;

    return (
      <div
        className={classNames(styles.grid__column, {
          [styles[`grid__column--${span}`]]: span,
        })}
      >
        {children}
      </div>
    );
  }
}

export default GridColumn;
