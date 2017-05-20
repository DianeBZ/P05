// __tests__/ProductAlerts-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import ProductAlerts from '../../../main/ProductAlerts';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ProductAlerts />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
