// __tests__/Reuse-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import Reuse from '../../../main/Reuse';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Reuse />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
