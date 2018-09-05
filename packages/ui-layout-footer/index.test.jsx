/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
