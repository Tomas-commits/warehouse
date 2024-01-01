import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ChartComponent from '../ChartComponent.vue'
import { createPinia } from 'pinia';

describe('ChartComponent.vue', () => {
    it('renders chart correctly', () => {
      const pinia = createPinia();
      const wrapper = mount(ChartComponent, {
        global: {
          plugins: [pinia],
        },
      });
      const canvas = wrapper.find('canvas');

      expect(canvas.exists()).toBe(true);
      
      
    });

    

  });