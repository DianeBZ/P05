// __tests__/HomePage-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
global.connection=1;
import HomePage from '../../../main/HomePage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <HomePage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
