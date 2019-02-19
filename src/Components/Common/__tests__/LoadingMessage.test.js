import React from 'react';
import renderer from 'react-test-renderer';
import LoadingMessage from '../LoadingMessage';

it('renders correctly', () => {
  const tree = renderer
    .create(<LoadingMessage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
