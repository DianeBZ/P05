// __tests__/Press-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import Press from '../../../main/Press';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Press />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
