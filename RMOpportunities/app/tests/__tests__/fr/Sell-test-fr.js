// __tests__/Sell-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Sell from '../../../main/Sell';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Sell />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
