// __tests__/SigningUpDone-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import SigningUpDone from '../../../main/SigningUpDone';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SigningUpDone />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
