import { mount } from '@vue/test-utils';
import VuiFormWrapper from './vui-form-wrapper.vue';

describe('vui-form-wrapper test', () => {
  it('is truthy', () => {
    expect(VuiFormWrapper).toBeTruthy();
  });

  it('renders without crashing', () => {
    const wrapper = mount(VuiFormWrapper);
    const row = wrapper.find('.vui-form');
    expect(row.exists()).toBe(true);
  });

  it('passes slot proplerly', () => {
    const wrapper = mount(VuiFormWrapper, {
      slots: {
        default: '<h1 id="testSlot">testSlot</h1>',
      }
    });
    const slot = wrapper.find('#testSlot');
    expect(slot.exists()).toBe(true);
  });
});