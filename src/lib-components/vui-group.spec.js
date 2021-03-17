import VuiGroup from './vui-group.vue';
import { mount } from '@vue/test-utils';

describe("vui-group", () => {
  it("is truthy", () => {
    expect(VuiGroup).toBeTruthy();
  });

  it("renders without crashing (even without required props)", () => {
    const wrapper = mount(VuiGroup);
    const group = wrapper.find('.vui-group');

    expect(group.exists()).toBe(true);
  });

  it("passes props proplerly", () => {
    const wrapper = mount(VuiGroup, {
      propsData: {
        name: 'testName',
      },
    });
    const name = wrapper.find('h3');

    expect(name.html()).toContain('testName');
  });

  it("passes slot proplerly", () => {
    const wrapper = mount(VuiGroup, {
      propsData: {
        name: 'testName',
      },
      slots: {
        default: '<h1>testSlot</h1>'
      },
    });
    const slot = wrapper.find('h1');

    expect(slot.html()).toContain('testSlot');
  });
});