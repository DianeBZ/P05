// __tests__/Offers-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Buy from '../../../main/Buy';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Buy />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
