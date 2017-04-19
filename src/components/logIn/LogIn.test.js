import React              from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock          from 'fetch-mock'


import LogIn from './LogIn'

describe('testing the loging component', () => {

  it('should render without crashing', () => {
    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    expect(wrapper.find('input').length).toBe(2)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('div').length).toBe(3)

  })

  it('should update email state with change of email input', () => {
    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    let email = wrapper.find('input[name="email"]')

    email.simulate('change', {
      target: {
        value: 'buttz'
      }
    })

    expect(wrapper.state().email).toBe('buttz')
  })

  it('should update password state with change of password input', () => {
    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    let password = wrapper.find('input[name="password"]')

    password.simulate('change', {
      target: {
        value: 'suhDude'
      }
    })

    expect(wrapper.state().password).toBe('suhDude')
  })


  it('lets should update an error state for a poorly formatted email', async (done) => {
    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    let email = wrapper.find('input[name="email"]')
    let password = wrapper.find('input[name="password"]')
    let submit = wrapper.find('button')

    email.simulate('change', {
      target: {
        value: 'buttz'
      }
    })
    password.simulate('change', {
      target: {
        value: 'suhDude'
      }
    })

    submit.simulate('click')

    await wrapper.update();

    expect(wrapper.state().email).toBe('buttz')
    expect(wrapper.state().password).toBe('suhDude')
    expect(wrapper.state().error).toBe('The email address is badly formatted.')
    done()

  })

  it('lets should render that error for a poorly formatted email', async (done) => {
    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    let email = wrapper.find('input[name="email"]')
    let password = wrapper.find('input[name="password"]')
    let submit = wrapper.find('button')

    email.simulate('change', {
      target: {
        value: 'buttz'
      }
    })

    password.simulate('change', {
      target: {
        value: 'suhDude'
      }
    })

    submit.simulate('click')

    await wrapper.update();


    expect(wrapper.state().email).toBe('buttz')
    expect(wrapper.state().password).toBe('suhDude')
    expect(wrapper.state().error).toBe('The email address is badly formatted.')
    expect(wrapper.find('.error').text()).toBe('The email address is badly formatted.')
    done()
  })

  it('should not render an error if formatted correctly', async (done) => {

    let wrapper = shallow(<LogIn signIn={jest.fn()}/>)

    let email = wrapper.find('input[name="email"]')
    let password = wrapper.find('input[name="password"]')
    let submit = wrapper.find('button')

    email.simulate('change', {
      target: {
        value: 'suhdude@email.com'
      }
    })

    password.simulate('change', {
      target: {
        value: 'suhDude'
      }
    })

    submit.simulate('click')

    await wrapper.update();

    expect(wrapper.state().email).toBe('suhdude@email.com')
    expect(wrapper.state().password).toBe('suhDude')
    expect(wrapper.find('.error').length).toBe(0)
    done()
  })

  it.skip('should do redirect to home ',  () => {

    let wrapper = mount(<LogIn signIn={jest.fn()} />)

    let email = wrapper.find('input[name="email"]')
    let password = wrapper.find('input[name="password"]')
    let submit = wrapper.find('button')

    email.simulate('change', {
      target: {
        value: 'hugh@email.com'
      }
    })

    password.simulate('change', {
      target: {
        value: 'suhDude'
      }
    })

    submit.simulate('click', {
      onClick: jest.fn()
    })

    console.log(wrapper.debug());
    expect(jest.fn()).toHaveBeenCalled()
    expect(wrapper.state().email).toBe('hugh@email.com')
    expect(wrapper.state().password).toBe('suhDude')
    expect(wrapper.find('.error').length).toBe(0)

    // expect that it redirects

  })

})





