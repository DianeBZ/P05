// __tests__/CreateClassifiedEnd-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import CreateClassifiedEnd from '../../../main/CreateClassifiedEnd';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CreateClassifiedEnd />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
