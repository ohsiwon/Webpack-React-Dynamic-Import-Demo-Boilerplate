import React from 'react';
import renderer from 'react-test-renderer';
import InventoryWindow from '../InventoryWindow';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <InventoryWindow>
        <div>Child 1</div>
        <div>Child 2</div>
      </InventoryWindow>
     )
    .toJSON();
  expect(tree).toMatchSnapshot();
});