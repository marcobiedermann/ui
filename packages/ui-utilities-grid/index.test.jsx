/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.';

describe('Grid component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Grid />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
