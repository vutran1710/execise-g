// The initial state with default props
import { mock } from './mock';

const state = {
  selectedCategory: 0,
  showModal: false,
  showMoveto: false,
  formType: null,
  data: mock,
  itemToModify: {
    index: null,
    type: null
  },
  itemToMove: {
    fromIndex: null,
    toIndex: null
  }
};

export const FORMTYPE = [
  'Add Category',
  'Add Reward',
  'Edit Category',
  'Edit Reward',
  'Confirm Delete'
];

export default state;
