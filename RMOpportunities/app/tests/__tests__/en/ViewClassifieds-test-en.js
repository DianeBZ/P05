// __tests__/ViewClassifieds-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import ViewClassifieds from '../../../main/ViewClassifieds';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ViewClassifieds />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
