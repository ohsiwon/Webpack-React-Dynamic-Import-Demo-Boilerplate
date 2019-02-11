import React from 'react';
import renderer from 'react-test-renderer';
import Router from '../';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});