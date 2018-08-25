// The initial state with default props
import { mock } from './mock'

const state = {
  selectedCategory: 0,
  showModal: false,
  formType: null,
  data: mock,
  itemToRemove: {
    index: null,
    type: null
  }
}

export const FORMTYPE = ['category', 'reward', 'confirmDelete']

export default state
