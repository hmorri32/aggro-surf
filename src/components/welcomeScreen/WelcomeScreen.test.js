import React       from 'react'
import { shallow } from 'enzyme'
import fetchMock   from 'fetch-mock'
import { browserHistory } from 'react-router'

import {WelcomeScreen} from './WelcomeScreen'
import { Link }        from 'react-router-dom';

describe.skip('testing our super cool welcome screen', () => {
  it('should render without blowing up', () =>{

    let wrapper = shallow(<WelcomeScreen />)


    expect(wrapper.find('Link').length).toBe(1)
    expect(wrapper.find('.App-header').length).toBe(1)
    expect(wrapper.find('.surf-sauce-h2').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
  })

  it.skip('should redirect if you click that button', async (done) =>{

    let wrapper = shallow(<WelcomeScreen onClick={jest.fn()} />)
    let button = wrapper.find('button')

    button.simulate('click', {
      props: jest.fn()
    })

    await wrapper.update()

    console.log(wrapper.debug());

    expect(wrapper.find('Link').length).toBe(1)
    expect(wrapper.find('.App-header').length).toBe(1)
    expect(wrapper.find('.surf-sauce-h2').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
    done()
  })


})


