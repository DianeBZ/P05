// __tests__/CreateClassified-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import CreateClassified from '../../../main/CreateClassified';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CreateClassified />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
