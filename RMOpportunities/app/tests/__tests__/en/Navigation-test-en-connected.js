// __tests__/Navigation-test-en-connected.js
import 'react-native';
import React from 'react';

global.lang = 'en';
global.connection = 1;
import Navigation from '../../../main/Navigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Navigation />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
