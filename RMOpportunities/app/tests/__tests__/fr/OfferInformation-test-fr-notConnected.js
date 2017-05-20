// __tests__/OfferInformation-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
global.connection=0;
import OfferInformation from '../../../main/OfferInformation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <OfferInformation />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
