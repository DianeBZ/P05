// __tests__/History-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import History from '../../../main/History';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <History />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
