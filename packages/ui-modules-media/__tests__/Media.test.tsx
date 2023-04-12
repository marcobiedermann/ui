import React from 'react';
import renderer from 'react-test-renderer';
import Media from '..';

describe('Media component', () => {
  it('renders left correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <Media.Object>Media Object</Media.Object>
          <Media.Body>Media Body</Media.Body>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders right correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <Media.Object direction="right">Media Object</Media.Object>
          <Media.Body>Media Body</Media.Body>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
