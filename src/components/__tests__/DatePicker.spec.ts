import { describe, expect, it } from 'vitest'
import { createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import DatePickerInput from '../DatePickerInput.vue';
import { useStore } from '@/views/stores';

describe('DatePickerInput.vue', () => {
  it('renders date input correctly', () => {
    const pinia = createPinia();
    const wrapper = mount(DatePickerInput, {
      global: {
        plugins: [pinia],
      },
    });
    const dateInput = wrapper.find('#datePicker');
    expect(dateInput.exists()).toBe(true);
  });

});