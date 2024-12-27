import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TestHeading from '../TestHeading.vue'

describe('TestHeading', () => {
  it('renders a heading', () => {
    const wrapper = mount(TestHeading, { slots: { default: 'Cool header!' } })
    expect(wrapper.classes()).toContain('text-3xl')
    expect(wrapper.element.tagName).toBe('H1')
  })
})
