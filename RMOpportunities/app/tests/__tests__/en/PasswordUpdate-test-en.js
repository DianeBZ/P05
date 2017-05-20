// __tests__/PasswordUpdate-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import PasswordUpdate from '../../../main/PasswordUpdate';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <PasswordUpdate />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
