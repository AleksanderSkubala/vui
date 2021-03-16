import { mount } from '@vue/test-utils';
import VuiInput from './vui-input.vue';

describe('vui-input test', () => {
  const propsData = {
    name: 'testName',
    label: 'testLabel',
    placeholder: 'testPlaceholder',
    autocomplete: 'testAutocomplete'
  };

  it('is truthy', () => {
    expect(VuiInput).toBeTruthy();
  });

  it('renders without crashing (even without required props)', () => {
    const wrapper = mount(VuiInput);
    const input = wrapper.find('.vui-input');
    expect(input.exists()).toBe(true);
  });

  it('passes props properly', () => {
    const wrapper = mount(VuiInput, { propsData });
    const input = wrapper.find('input');
    const label = wrapper.find('label')

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('testLabel');

    expect(input.exists()).toBe(true);
    expect(input.attributes('name')).toBe('testName');
    expect(input.attributes('placeholder')).toBe('testPlaceholder');
    expect(input.attributes('autocomplete')).toBe('testAutocomplete');
  });

  it('emits data on input', async () => {
    const wrapper = mount(VuiInput, { propsData });
    const input = wrapper.find('input');
    await input.setValue('test text');

    expect(input.exists()).toBe(true);
    expect(wrapper.emitted()).toHaveProperty('handleInput');
    expect(wrapper.emitted().handleInput).toHaveLength(1);
    expect(wrapper.emitted().handleInput[0]).toEqual(['test text']);
  });

  it('calls callback on input', async () => {
    const inputHandler = jest.fn();
    const wrapper = mount(VuiInput, {
      propsData: {
        ...propsData,
        onHandleInput: inputHandler,
      }
    });
    const input = wrapper.find('input');
    await input.setValue('test text');

    expect(input.exists()).toBe(true);
    expect(inputHandler).toHaveBeenCalled();
  });
});