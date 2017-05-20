// __tests__/AccountInformation-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import AccountInformation from '../../../main/AccountInformation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AccountInformation />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
