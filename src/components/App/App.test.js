import React              from 'react'
import { shallow }        from 'enzyme'
import fetchMock          from 'fetch-mock'
import { browserHistory } from 'react-router'
import App                from './App.js'

it('renders without crashing', () => {
  let wrapper = shallow(<App />)

});
