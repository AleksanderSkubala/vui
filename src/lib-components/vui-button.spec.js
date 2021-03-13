import VuiButton from './vui-button.vue'
// import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'

describe('vui-button test', () => {
  it('is truthy', () => {
    // expect(VuiButton).toBeTruthy()
  })

  // it('renders without crashing', () => {
  //   const { getByRole } = render(VuiButton);
  //   const button = getByRole('button');
  //   expect(button).toBeTruthy();
  // })

  it('renders without crashing', () => {
    const wrapper = shallowMount(VuiButton);
    // const button = wrapper.find('.vui-button')
    // expect(button).toBeDefined()
  })

  it('renders without passing props', () => {})

  it('passes props and slot properly', () => {})

  it('runs callback on handler', () => {})
})