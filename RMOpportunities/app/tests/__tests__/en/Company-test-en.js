// __tests__/Company-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import Company from '../../../main/Company';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Company />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
