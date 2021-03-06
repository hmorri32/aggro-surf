import React                 from 'react'
import { shallow }           from 'enzyme'
import fetchMock             from 'fetch-mock'
import { browserHistory }    from 'react-router'
import App                   from './App.js'
import {spitCastBeaconsData} from '../../helpers/fetch.js'



describe('testing this app', () => {
  it('should render without exploding', () => {
  let wrapper = shallow(<App />)

  expect(wrapper.find('.App').length).toBe(1)
  expect(wrapper.find('.App-background').length).toBe(1)
  expect(wrapper.find('Route').length).toBe(4)
  })

  it.skip('it fetches', () => {
    let wrapper = shallow(<App />)

    const spy = spyOn(<App />, 'spitCastBeaconsData');

    fetchMock.get('http://api.spitcast.com/api/spot/forecast/235/',
    { status: 200})

    console.log(spy);


  })

})

