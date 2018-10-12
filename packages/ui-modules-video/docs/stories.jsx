/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import '../video.css';

storiesOf('Video', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <video
      autoPlay={boolean('autoplay', false)}
      muted={boolean('muted', false)}
    >
      <source
        src={text('src', 'path/to/video.mp4')}
        type="video/mp4"
      />
    </video>
  ));
