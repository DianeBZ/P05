// __tests__/CreateClassified-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import CreateClassified from '../../../main/CreateClassified';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CreateClassified />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
