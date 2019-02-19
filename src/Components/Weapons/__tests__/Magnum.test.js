import React from 'react';
import renderer from 'react-test-renderer';
import Magnum from '../Magnum';

it('renders correctly', () => {
  const tree = renderer
    .create(<Magnum />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
