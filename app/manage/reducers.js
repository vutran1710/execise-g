import { combineReducers } from 'redux'
import { State } from 'jumpstate'
import { reducer as formReducer } from 'redux-form'
import initial, { FORMTYPE } from './state'
import './effects'

const main = State('main', {
  initial,
  setItemToRemove: (state, itemToModify) => (
    { ...state, showModal: true, formType: FORMTYPE[4], itemToModify }
  ),
  setRewardToEdit: (state, itemToModify) => (
    { ...state, showModal: true, formType: FORMTYPE[3], itemToModify }
  ),
  setCategoryToEdit: (state, itemToModify) => (
    { ...state, showModal: true, formType: FORMTYPE[2], itemToModify }
  ),
  removeItem: state => {
    const { index, type } = state.itemToModify
    if (type === 'category') {
      const newArray = [...state.data]
      const selected = state.selectedCategory
      newArray.splice(index, 1)
      const selectedCategory = selected === newArray.length ? selected - 1 : selected
      return ({
        ...state,
        selectedCategory,
        showModal: false,
        data: newArray
      })
    }
    if (type === 'reward') {
      const newData = Array.from(state.data)
      const newRewards = [...state.data[state.selectedCategory].rewards]
      newRewards.splice(index, 1)
      newData[state.selectedCategory] = {
        ...newData[state.selectedCategory],
        rewards: newRewards
      }
      return ({
        ...state,
        showModal: false,
        data: newData
      })
    }
  },
  toggleModal: state => ({ ...state, showModal: !state.showModal }),
  setFormType: (state, formType) => ({ ...state, formType }),
  changeCategory: (state, selectedCategory) => ({ ...state, selectedCategory }),
  changeCategoryOrder: (state, [data, selectedCategory]) => ({ ...state, selectedCategory, data }),
  changeRewardOrder: (state, [rewards]) => {
    const newData = Array.from(state.data)
    newData[state.selectedCategory] = { ...newData[state.selectedCategory], rewards }
    return ({
      ...state,
      data: newData
    })
  },
  addNewCategory: (state) => ({ ...state, data: [...state.data] }),
  addNewReward: (state, reward) => {
    const newData = Array.from(state.data)
    newData[state.selectedCategory] = {
      ...newData[state.selectedCategory],
      rewards: newData[state.selectedCategory].rewards.concat([reward])
    }
    return ({
      ...state,
      data: newData
    })
  },
  editReward: (state, reward) => {
    const newData = Array.from(state.data)
    const newRewards = [...state.data[state.selectedCategory].rewards]
    newRewards.map((r, i) => {
      if (r.id === reward.id) {
        newRewards[i] = reward;
      }
    });
    newData[state.selectedCategory] = {
      ...newData[state.selectedCategory],
      rewards: newRewards
    }
    return ({
      ...state,
      data: newData
    })
  },
  editCategory: (state, data) => {
    const newData = Array.from(state.data)
    newData.map((c, i) => {
      if (c.id === data.id) {
        newData[i] = data;
      }
    });
    return ({
      ...state,
      data: newData
    })
  }
})

export default combineReducers({
  main,
  form: formReducer
})
