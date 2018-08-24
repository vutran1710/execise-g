import { combineReducers } from 'redux'
import { State } from 'jumpstate'
import { reducer as formReducer } from 'redux-form'
import initial from './state'
import './effects'


const main = State('main', {
  initial,
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
  addNewCategory: (state, category) => ({ ...state, data: [...state.data, category] }),
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
  }
})

export default combineReducers({
  main,
  form: formReducer
})
