// __tests__/FAQ-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import FAQ from '../../../main/FAQ';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <FAQ />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
