// __tests__/AddDemand-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import AddDemand from '../../../main/AddDemand';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AddDemand />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
