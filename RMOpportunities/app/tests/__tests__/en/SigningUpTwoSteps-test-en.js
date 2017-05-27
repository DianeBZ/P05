// __tests__/SigningUpThreeSteps-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import SigningUpTwoSteps from '../../../main/SigningUpTwoSteps';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SigningUpTwoSteps />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
