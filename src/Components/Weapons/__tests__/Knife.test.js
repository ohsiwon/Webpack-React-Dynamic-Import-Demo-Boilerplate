import React from 'react';
import renderer from 'react-test-renderer';
import Knife from '../Knife';

it('renders correctly', () => {
  const tree = renderer
    .create(<Knife />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
