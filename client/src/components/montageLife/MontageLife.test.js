import React       from 'react'
import { shallow } from 'enzyme'
import fetchMock   from 'fetch-mock'

import MontageLife from './MontageLife'

describe('testing that ultra chic collage', () => {
  it('should render without blowing up', () => {
    let wrapper = shallow(<MontageLife />)

    expect(wrapper.find('.montage').length).toBe(1)
    expect(wrapper.find('iframe').length).toBe(5)
    expect(wrapper.find('img').length).toBe(13)
    expect(wrapper.find('.vidz').length).toBe(18)
  })
})