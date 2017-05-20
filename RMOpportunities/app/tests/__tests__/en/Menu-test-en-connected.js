// __tests__/Menu-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
global.connection=1;
import Menu from '../../../main/Menu';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Menu />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
