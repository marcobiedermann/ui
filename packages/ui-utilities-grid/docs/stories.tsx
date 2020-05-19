/* eslint-disable import/no-extraneous-dependencies */
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid, { Column, Row } from '../react';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Grid>
      {text(
        'Content',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
      )}
    </Grid>
  ))
  .add('Column', () => (
    <Grid>
      <Row>
        <Column>
          {text(
            'Content',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
          )}
        </Column>
        <Column>
          {text(
            'Content',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
          )}
        </Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 1', () => (
    <Grid>
      <Row>
        <Column span={1}>{text('Content Colum 1', 'Colum 1')}</Column>
        <Column span={11}>{text('Content Colum 11', 'Colum 11')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 2', () => (
    <Grid>
      <Row>
        <Column span={2}>{text('Content Colum 2', 'Colum 2')}</Column>
        <Column span={10}>{text('Content Colum 10', 'Colum 10')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 3', () => (
    <Grid>
      <Row>
        <Column span={3}>{text('Content Colum 3', 'Colum 3')}</Column>
        <Column span={9}>{text('Content Colum 9', 'Colum 9')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 4', () => (
    <Grid>
      <Row>
        <Column span={4}>{text('Content Colum 4', 'Colum 4')}</Column>
        <Column span={8}>{text('Content Colum 8', 'Colum 8')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 5', () => (
    <Grid>
      <Row>
        <Column span={5}>{text('Content Colum 5', 'Colum 5')}</Column>
        <Column span={7}>{text('Content Colum 7', 'Colum 7')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 6', () => (
    <Grid>
      <Row>
        <Column span={6}>{text('Content Colum 6', 'Colum 6')}</Column>
        <Column span={6}>{text('Content Colum 6', 'Colum 6')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 7', () => (
    <Grid>
      <Row>
        <Column span={7}>{text('Content Colum 7', 'Colum 7')}</Column>
        <Column span={5}>{text('Content Colum 5', 'Colum 5')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 8', () => (
    <Grid>
      <Row>
        <Column span={8}>{text('Content Colum 8', 'Colum 8')}</Column>
        <Column span={4}>{text('Content Colum 4', 'Colum 4')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 9', () => (
    <Grid>
      <Row>
        <Column span={9}>{text('Content Colum 9', 'Colum 9')}</Column>
        <Column span={3}>{text('Content Colum 3', 'Colum 3')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 10', () => (
    <Grid>
      <Row>
        <Column span={10}>{text('Content Colum 10', 'Colum 10')}</Column>
        <Column span={2}>{text('Content Colum 2', 'Colum 2')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 11', () => (
    <Grid>
      <Row>
        <Column span={11}>{text('Content Colum 11', 'Colum 11')}</Column>
        <Column span={1}>{text('Content Colum 1', 'Colum 1')}</Column>
      </Row>
    </Grid>
  ))
  .add('Column Span 12', () => (
    <Grid>
      <Row>
        <Column span={12}>{text('Content Colum 12', 'Colum 12')}</Column>
      </Row>
    </Grid>
  ));
