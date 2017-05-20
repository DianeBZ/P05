// __tests__/ViewConnections-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import ViewConnections from '../../../main/ViewConnections';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ViewConnections />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
