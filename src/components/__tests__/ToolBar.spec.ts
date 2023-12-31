import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ToolBar from '@/components/ToolBar.vue'

describe('ToolBar.vue', () => {
  it('should toggle drawer when nav icon is clicked', async () => {
    const wrapper = mount(ToolBar)
    const navIcon = wrapper.find('v-app-bar-nav-icon')

    expect((wrapper.vm as any).drawer).toBe(null)
    await navIcon.trigger('click')
    expect((wrapper.vm as any).drawer).toBe(true)
  })

  it('should have links to the Overview and Storage pages', () => {
    const wrapper = mount(ToolBar)
    const overviewLink = wrapper.find('v-btn[to="/"]')
    const storageLink = wrapper.find('v-btn[to="/storage"]')

    expect(overviewLink.exists()).toBe(true)
    expect(storageLink.exists()).toBe(true)
  })
})