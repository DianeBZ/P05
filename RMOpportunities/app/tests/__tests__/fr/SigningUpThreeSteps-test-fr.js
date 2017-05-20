// __tests__/SigningUpThreeSteps-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import SigningUpThreeSteps from '../../../main/SigningUpThreeSteps';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SigningUpThreeSteps />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
