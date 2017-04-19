import React       from 'react'
import { shallow } from 'enzyme'
import fetchMock   from 'fetch-mock'
import { browserHistory } from 'react-router'

import {WelcomeScreen} from './WelcomeScreen'


it('should render without crashing', () =>{
  let wrapper = shallow(<WelcomeScreen />)
})