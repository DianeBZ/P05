// __tests__/ViewNegociations-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import ViewNegociations from '../../../main/ViewNegociations';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ViewNegociations />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
