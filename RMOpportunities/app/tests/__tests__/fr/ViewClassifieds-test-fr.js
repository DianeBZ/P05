// __tests__/ViewClassifieds-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import ViewClassifieds from '../../../main/ViewClassifieds';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ViewClassifieds />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
