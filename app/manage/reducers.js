import { combineReducers } from 'redux';
import { State } from 'jumpstate';
import { reducer as formReducer } from 'redux-form';
import initial from './state';
import formActions from './formActions';
import './effects';

const main = State('main', {
  initial,
  ...formActions,
  toggleModal: state => ({ ...state, showModal: !state.showModal }),
  changeCategory: (state, selectedCategory) => ({ ...state, selectedCategory }),
  changeCategoryOrder: (state, [data, selectedCategory]) => ({ ...state, selectedCategory, data }),
  changeRewardOrder: (state, [rewards]) => {
    const newData = Array.from(state.data);
    newData[state.selectedCategory] = { ...newData[state.selectedCategory], rewards };
    return {
      ...state,
      data: newData
    };
  },
  removeItem: state => {
    const { index, type } = state.itemToModify;
    if (type === 'category') {
      const newArray = [...state.data];
      const selected = state.selectedCategory;
      newArray.splice(index, 1);
      const selectedCategory = selected === newArray.length ? selected - 1 : selected;
      return {
        ...state,
        selectedCategory,
        showModal: false,
        data: newArray
      };
    }
    if (type === 'reward') {
      const newData = Array.from(state.data);
      const newRewards = [...state.data[state.selectedCategory].rewards];
      newRewards.splice(index, 1);
      newData[state.selectedCategory] = {
        ...newData[state.selectedCategory],
        rewards: newRewards
      };
      return {
        ...state,
        showModal: false,
        data: newData
      };
    }
  },
  setCategoryToMove: (state, itemToMove, showMoveTo) => ({ ...state, showMoveTo, itemToMove }),
  moveCategory: (state, newIndex) => {
    const oldIndex = state.selectedCategory;
    const newData = Array.from(state.data);
    const maxIndex = state.data.length - 1;
    const fixIndex = newIndex > maxIndex ? maxIndex : newIndex;
    newData[oldIndex] = state.data[fixIndex];
    newData[fixIndex] = state.data[oldIndex];
    return {
      ...state,
      selectedCategory: fixIndex,
      data: newData
    };
  },
  moveReward: (state, { oldIndex, newIndex }) => {
    const { selectedCategory } = state;
    const newData = Array.from(state.data);
    const newRewards = Array.from(state.data[selectedCategory].rewards);
    const maxIndex = newRewards.length - 1;
    const fixIndex = newIndex > maxIndex ? maxIndex : newIndex;
    newRewards[oldIndex] = state.data[selectedCategory].rewards[fixIndex];
    newRewards[fixIndex] = state.data[selectedCategory].rewards[oldIndex];
    newData[selectedCategory] = {
      ...newData[selectedCategory],
      rewards: newRewards
    };
    return {
      ...state,
      data: newData
    };
  }
});

export default combineReducers({
  main,
  form: formReducer
});
