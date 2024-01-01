import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ToolBar from '../ToolBar.vue'

describe('ToolBar.vue', () => {
    it('mounts and operates drawer correctly', async () => {
        const wrapper = mount(ToolBar)
        expect((wrapper.vm as any).drawer).toBe(null)
        const navIcon = wrapper.find('v-app-bar-nav-icon')
        await navIcon.trigger('click')

        // Check if drawer opened
        expect((wrapper.vm as any).drawer).toBe(true)

        // Simulate another click event
        await navIcon.trigger('click')

        // Check if drawer closed
        expect((wrapper.vm as any).drawer).toBe(false)
    })
})