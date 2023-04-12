import React from 'react';
import renderer from 'react-test-renderer';
import Embed from './Embed';

describe('Embed component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Embed>
          <iframe src="/" title="@marcobiedermann/ui" />
        </Embed>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders aspect ratio correctly', () => {
    const tree = renderer
      .create(
        <Embed aspectRatio="16-9">
          <iframe src="/" title="@marcobiedermann/ui" />
        </Embed>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
