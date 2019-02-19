import React from 'react';
import renderer from 'react-test-renderer';
import Claire from '../Claire';

it('renders correctly', () => {
  const tree = renderer
    .create(<Claire />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
