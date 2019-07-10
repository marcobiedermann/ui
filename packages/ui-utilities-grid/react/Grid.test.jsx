import React from 'react';
import renderer from 'react-test-renderer';
import Grid, { GridRow, GridColumn } from '.';

describe('Grid component', () => {
  const GRID_COLUMNS = 12;

  it('renders correctly', () => {
    const tree = renderer.create(<Grid />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  for (let i = 1; i < GRID_COLUMNS; i += 1) {
    it(`renders column span ${i} correctly`, () => {
      const tree = renderer
        .create(
          <Grid>
            <GridRow>
              <GridColumn span={i}>Column {i}</GridColumn>
              <GridColumn span={GRID_COLUMNS - i}>Column {GRID_COLUMNS - i}</GridColumn>
            </GridRow>
          </Grid>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  }
});
