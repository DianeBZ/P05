// __tests__/OffersCategory-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import OffersCategory from '../../../main/OffersCategory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <OffersCategory />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
