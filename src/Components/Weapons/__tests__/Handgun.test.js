import React from 'react';
import renderer from 'react-test-renderer';
import Handgun from '../Handgun';

it('renders correctly', () => {
  const tree = renderer
    .create(<Handgun />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});