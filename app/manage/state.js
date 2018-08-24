// The initial state with default props
import { mock } from './mock'

const state = {
  selectedCategory: 0,
  showModal: false,
  formType: null,
  data: mock
}

export const FORMTYPE = ['category', 'reward']

export default state
