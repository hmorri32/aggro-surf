import React              from 'react'
import { shallow }        from 'enzyme'
import fetchMock          from 'fetch-mock'
import { browserHistory } from 'react-router'
import App                from './App.js'
const store = configureMockStore()();

it('renders without crashing', () => {
  let wrapper = shallow(<App provider={store}/>)
  console.log('suh');
});
