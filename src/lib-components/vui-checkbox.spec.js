import { mount } from '@vue/test-utils';
import VuiCheckbox from './vui-checkbox.vue';

describe('vui-checkobox test', () => {
  const propsData = {
    name: 'testName',
    label: 'testLabel',
  };

  it('is truthy', () => {
    expect(VuiCheckbox).toBeTruthy();
  });

  it('renders without crashing (even without required props)', () => {
    const wrapper = mount(VuiCheckbox);
    const input = wrapper.find('.vui-checkbox');
    expect(input.exists()).toBe(true);
  });

  it('passes props properly', () => {
    const wrapper = mount(VuiCheckbox, { propsData });
    const input = wrapper.find('input');
    const label = wrapper.find('label')

    expect(label.exists()).toBe(true);
    expect(label.html()).toContain('testLabel');

    expect(input.exists()).toBe(true);
    expect(input.attributes('id')).toBe('testName');
  });

  it('emits data on input', async () => {
    const wrapper = mount(VuiCheckbox, { propsData });
    const input = wrapper.find('input');
    await input.trigger('click');

    expect(input.exists()).toBe(true);
    expect(wrapper.emitted()).toHaveProperty('handleCheck');
    expect(wrapper.emitted().handleCheck).toHaveLength(1);
    expect(wrapper.emitted().handleCheck[0]).toEqual([true]);
  });

  it('calls callback on input', async () => {
    const checkHandler = jest.fn();
    const wrapper = mount(VuiCheckbox, {
      propsData: {
        ...propsData,
        onHandleCheck: checkHandler,
      }
    });
    const input = wrapper.find('input');
    await input.trigger('click');

    expect(input.exists()).toBe(true);
    expect(checkHandler).toHaveBeenCalled();
  });
});