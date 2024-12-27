import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TestButton from '../TestButton.vue'

describe('TestButton', () => {
  it('renders properly', () => {
    const wrapper = mount(TestButton, { slots: { default: 'Hello!' } })
    expect(wrapper.text()).toContain('Hello!')
  })

  it('emits an event when clicked', () => {
    const wrapper = mount(TestButton)
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('is disabled when loading', () => {
    const wrapper = mount(TestButton, { props: { loading: true } })
    expect(wrapper.attributes()).toHaveProperty('disabled')
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
