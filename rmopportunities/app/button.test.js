import React from 'react'
import { shallow } from 'enzyme'

export default () => null

import button from './deposer_une_annonce'

const wrapper = shallow(<button/>)

it('should render a <TouchableHighlight/>', () => {
	expect(wrapper.find('TouchableHighlight')).toHaveLength(1)
})