// __tests__/Benefits-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import Benefits from '../../../main/Benefits';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Benefits />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
