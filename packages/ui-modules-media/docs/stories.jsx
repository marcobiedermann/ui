/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Media, { MediaObject, MediaBody } from '../Media';

storiesOf('Media', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Media>
      <MediaObject
        modifier={select('Modifier', {
          left: 'Left',
          right: 'Right',
        })}
      >
        Media Object
      </MediaObject>
      <MediaBody>
        {text('Content', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?')}
      </MediaBody>
    </Media>
  ));
