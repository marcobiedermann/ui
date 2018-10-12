/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Grid, { GridRow, GridColumn } from '../react';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Grid>
      {text('Content', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?')}
    </Grid>
  ))
  .add('Column', () => (
    <Grid>
      <GridRow>
        <GridColumn>
          {text('Content', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?')}
        </GridColumn>
        <GridColumn>
          {text('Content', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 1', () => (
    <Grid>
      <GridRow>
        <GridColumn span={1}>
          {text('Content Colum 1', 'Colum 1')}
        </GridColumn>
        <GridColumn span={11}>
          {text('Content Colum 11', 'Colum 11')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 2', () => (
    <Grid>
      <GridRow>
        <GridColumn span={2}>
          {text('Content Colum 2', 'Colum 2')}
        </GridColumn>
        <GridColumn span={10}>
          {text('Content Colum 10', 'Colum 10')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 3', () => (
    <Grid>
      <GridRow>
        <GridColumn span={3}>
          {text('Content Colum 3', 'Colum 3')}
        </GridColumn>
        <GridColumn span={9}>
          {text('Content Colum 9', 'Colum 9')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 4', () => (
    <Grid>
      <GridRow>
        <GridColumn span={4}>
          {text('Content Colum 4', 'Colum 4')}
        </GridColumn>
        <GridColumn span={8}>
          {text('Content Colum 8', 'Colum 8')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 5', () => (
    <Grid>
      <GridRow>
        <GridColumn span={5}>
          {text('Content Colum 5', 'Colum 5')}
        </GridColumn>
        <GridColumn span={7}>
          {text('Content Colum 7', 'Colum 7')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 6', () => (
    <Grid>
      <GridRow>
        <GridColumn span={6}>
          {text('Content Colum 6', 'Colum 6')}
        </GridColumn>
        <GridColumn span={6}>
          {text('Content Colum 6', 'Colum 6')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 7', () => (
    <Grid>
      <GridRow>
        <GridColumn span={7}>
          {text('Content Colum 7', 'Colum 7')}
        </GridColumn>
        <GridColumn span={5}>
          {text('Content Colum 5', 'Colum 5')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 8', () => (
    <Grid>
      <GridRow>
        <GridColumn span={8}>
          {text('Content Colum 8', 'Colum 8')}
        </GridColumn>
        <GridColumn span={4}>
          {text('Content Colum 4', 'Colum 4')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 9', () => (
    <Grid>
      <GridRow>
        <GridColumn span={9}>
          {text('Content Colum 9', 'Colum 9')}
        </GridColumn>
        <GridColumn span={3}>
          {text('Content Colum 3', 'Colum 3')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 10', () => (
    <Grid>
      <GridRow>
        <GridColumn span={10}>
          {text('Content Colum 10', 'Colum 10')}
        </GridColumn>
        <GridColumn span={2}>
          {text('Content Colum 2', 'Colum 2')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 11', () => (
    <Grid>
      <GridRow>
        <GridColumn span={11}>
          {text('Content Colum 11', 'Colum 11')}
        </GridColumn>
        <GridColumn span={1}>
          {text('Content Colum 1', 'Colum 1')}
        </GridColumn>
      </GridRow>
    </Grid>
  ))
  .add('Column Span 12', () => (
    <Grid>
      <GridRow>
        <GridColumn span={12}>
          {text('Content Colum 12', 'Colum 12')}
        </GridColumn>
      </GridRow>
    </Grid>
  ));
