/* eslint-disable import/no-extraneous-dependencies */
import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import Media from '../react';

const { Body, Object } = Media;

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
          left: 'Left',
          right: 'Right',
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
