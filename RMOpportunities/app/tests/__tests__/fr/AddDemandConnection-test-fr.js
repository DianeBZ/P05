// __tests__/AddDemandConnection-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import AddDemandConnection from '../../../main/AddDemandConnection';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AddDemandConnection />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
