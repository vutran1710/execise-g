// The initial state with default props
import { mock } from './mock'

const state = {
  selectedCategory: 0,
  showModal: false,
  formType: null,
  data: mock,
  itemToModify: {
    index: null,
    type: null
  },
  moveItem: {
    fromIndex: null,
    toIndex: null
  }
}

export const FORMTYPE = ['addCategory', 'addReward', 'editCategory', 'editReward', 'confirmDelete']

export default state
