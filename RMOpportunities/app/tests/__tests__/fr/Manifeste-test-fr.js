// __tests__/Manifeste-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Manifeste from '../../../main/Manifeste';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Manifeste />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
