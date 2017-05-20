// __tests__/AddProductConnection-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import AddProductConnection from '../../../main/AddProductConnection';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AddProductConnection />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
