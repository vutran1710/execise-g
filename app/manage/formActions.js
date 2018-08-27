import { FORMTYPE } from './state';

module.exports = {
  setFormType: (state, formType) => ({ ...state, formType }),
  setItemToRemove: (state, itemToModify) => ({
    ...state,
    showModal: true,
    formType: FORMTYPE[4],
    itemToModify
  }),
  setRewardToEdit: (state, itemToModify) => ({
    ...state,
    showModal: true,
    formType: FORMTYPE[3],
    itemToModify
  }),
  setCategoryToEdit: (state, itemToModify) => ({
    ...state,
    showModal: true,
    formType: FORMTYPE[2],
    itemToModify
  }),
  addNewCategory: state => ({ ...state, data: [...state.data] }),
  addNewReward: (state, reward) => {
    const newData = Array.from(state.data);
    newData[state.selectedCategory] = {
      ...newData[state.selectedCategory],
      rewards: newData[state.selectedCategory].rewards.concat([reward])
    };
    return {
      ...state,
      data: newData
    };
  },
  editReward: (state, reward) => {
    const { selectedCategory } = state;
    const { index } = state.itemToModify;
    const newData = Array.from(state.data);
    newData[selectedCategory].rewards[index] = reward;
    return {
      ...state,
      data: newData
    };
  },
  editCategory: (state, category) => {
    const newData = Array.from(state.data);
    const { selectedCategory } = state;
    newData[selectedCategory] = category;
    return {
      ...state,
      data: newData
    };
  }
};
