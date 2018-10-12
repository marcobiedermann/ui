import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button>
          Button
        </Button>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled correctly', () => {
    const tree = renderer
      .create(
        <Button disabled>
          Button
        </Button>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
