import { mount } from '@vue/test-utils';
import VuiButton from './vui-button.vue';

describe('vui-button test', () => {
  it('is truthy', () => {
    expect(VuiButton).toBeTruthy();
  });

  it('renders without crashing', () => {
    const wrapper = mount(VuiButton);
    const button = wrapper.find('.vui-button');
    expect(button.exists()).toBe(true);
  });

  it('passes props properly', () => {
    const wrapper = mount(VuiButton, {
      propsData: {
        ghost: true,
        large: true,
      }
    });
    const button = wrapper.find('.vui-button.vui-button--ghost.vui-button--large');
    expect(button.exists()).toBe(true);
  });

  it('passes slot properly', () => {
    const wrapper = mount(VuiButton, {
      slots: {
        default: '<h1 id="testSlot">testSlot</h1>',
      }
    });
    const slot = wrapper.find('#testSlot');
    expect(slot.exists()).toBe(true);
  });

  it('runs callback on click', async () => {
    const clickHandler = jest.fn();
    const wrapper = mount(VuiButton, {
      propsData: {
        onClick: clickHandler,
      }
    });
    const button = wrapper.find('.vui-button');
    expect(button.exists()).toBe(true);

    await button.trigger('click');
    expect(clickHandler).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});