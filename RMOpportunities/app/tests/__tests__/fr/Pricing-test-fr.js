// __tests__/Pricing-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Pricing from '../../../main/Pricing';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Pricing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
