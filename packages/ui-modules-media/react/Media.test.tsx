import React from 'react';
import renderer from 'react-test-renderer';
import Media from '.';

const { Body, Object } = Media;

describe('Media component', () => {
  it('renders left correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <Object>Media Object</Object>
          <Body>Media Body</Body>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders right correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <Object direction="right">Media Object</Object>
          <Body>Media Body</Body>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
