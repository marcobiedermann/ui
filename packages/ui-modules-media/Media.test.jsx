/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Media, { MediaObject, MediaBody } from './Media';

describe('Media component', () => {
  it('renders left correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <MediaObject modifier="left">
            Media Object
          </MediaObject>
          <MediaBody>
            Media Body
          </MediaBody>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders right correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <MediaObject modifier="right">
            Media Object
          </MediaObject>
          <MediaBody>
            Media Body
          </MediaBody>
        </Media>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
