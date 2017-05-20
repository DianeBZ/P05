// __tests__/CreateClassifiedEnd-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import CreateClassifiedEnd from '../../../main/CreateClassifiedEnd';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CreateClassifiedEnd />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
