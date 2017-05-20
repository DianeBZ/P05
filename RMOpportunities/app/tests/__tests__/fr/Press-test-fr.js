// __tests__/Press-test-fr.js
import 'react-native';
import React from 'react';

global.lang = 'fr';
import Press from '../../../main/Press';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Press />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
