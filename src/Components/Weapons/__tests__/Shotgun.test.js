import React from 'react';
import renderer from 'react-test-renderer';
import Shotgun from '../Shotgun';

it('renders correctly', () => {
  const tree = renderer
    .create(<Shotgun />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
