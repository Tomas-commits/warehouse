import { createPinia } from 'pinia';
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import StorageView from '@/views/StorageView.vue'
import { useStore } from '@/views/stores'

describe('StorageView.vue', () => {
  it('renders correctly', () => {
    const pinia = createPinia();
    const wrapper = mount(StorageView, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('adds item correctly', async () => {
    const pinia = createPinia();
    const store = useStore(pinia);
    const wrapper = mount(StorageView, {
      global: {
        plugins: [pinia],
      },
    });

    // Mock form input
    (wrapper.vm as any).item = 'Test Item';
    (wrapper.vm as any).quantity = '2';
    (wrapper.vm as any).amount = '100';

  // Mock event
  const event = {
    preventDefault: () => {},
    target: {
      checkValidity: () => true, // Mock checkValidity to return true
    },
  };
    // Call addItem
    await (wrapper.vm as any).addItem(event);

    // Check if item was added to the store
    // expect(store.itemList).toBe(true);
    expect(store.itemList[0]).toEqual(expect.objectContaining({
        item: 'Test Item',
        quantity: '2',
        amount: '100',
        total: '200.00',
      }));
  });
});