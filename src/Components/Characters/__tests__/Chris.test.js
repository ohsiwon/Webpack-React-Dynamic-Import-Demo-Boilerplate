import React from 'react';
import renderer from 'react-test-renderer';
import Chris from '../Chris';

it('renders correctly', () => {
  const tree = renderer
    .create(<Chris />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});