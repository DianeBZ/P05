// __tests__/SigningUp-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import SigningUp from '../../../main/SigningUp';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SigningUp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
