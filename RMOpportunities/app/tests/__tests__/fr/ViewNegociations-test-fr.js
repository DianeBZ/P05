// __tests__/ViewNegociations-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import ViewNegociations from '../../../main/ViewNegociations';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ViewNegociations />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
