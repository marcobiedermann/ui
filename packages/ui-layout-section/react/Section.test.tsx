import React from 'react';
import renderer from 'react-test-renderer';
import Section from './Section';

describe('Section component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Section />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
