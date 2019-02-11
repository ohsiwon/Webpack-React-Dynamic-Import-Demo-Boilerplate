import React from 'react';
import renderer from 'react-test-renderer';
import Leon from '../Leon';

it('renders correctly', () => {
  const tree = renderer
    .create(<Leon />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});