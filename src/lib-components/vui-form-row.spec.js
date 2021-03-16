import { mount } from '@vue/test-utils';
import VuiFormRow from './vui-form-row.vue';

describe('vui-form-row test', () => {
  it('is truthy', () => {
    expect(VuiFormRow).toBeTruthy();
  });

  it('renders without crashing', () => {
    const wrapper = mount(VuiFormRow);
    const row = wrapper.find('.vui-form__row');
    expect(row.exists()).toBe(true);
  });

  it('passes slot proplerly', () => {
    const wrapper = mount(VuiFormRow, {
      slots: {
        default: '<h1 id="testSlot">testSlot</h1>',
      }
    });
    const slot = wrapper.find('#testSlot');
    expect(slot.exists()).toBe(true);
  });
});