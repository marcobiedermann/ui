/* eslint-disable import/no-extraneous-dependencies */
import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import Media, { Body, Object } from '../react';

export default {
  component: Media,
  title: 'Media',
};

export const Default = () => (
  <Media>
    <Object
      direction={select(
        'Direction',
        {
          left: 'left',
          right: 'right',
        },
        'left',
      )}
    >
      Media Object
    </Object>
    <Body>
      {text(
        'Content',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
      )}
    </Body>
  </Media>
);
