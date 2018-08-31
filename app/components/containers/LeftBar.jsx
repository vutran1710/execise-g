import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import { FORMTYPE } from '../../manage/state'

import Container from '../base/Container'
import Category from '../base/Category'
import Button from '../base/Button'

import ItemList from './ItemList'

const stateToProps = ({ main }) => ({
  selectedCategory: main.selectedCategory,
  data: main.data
})

const changeCategory = number => () => Actions.main.changeCategory(number)
const changeCategoryOrder = (categories, idx) => Actions.main.changeCategoryOrder([categories, idx])
const toggleModal = formType => () => {
  Actions.main.setFormType(formType)
  Actions.main.toggleModal()
}

const LeftBar = ({ selectedCategory, data }) => (
  <Container className="fixed-width">
    <Container className="left-header">
      <Button title="+ Add Category" btn="primary" onClick={toggleModal(FORMTYPE[0])} />
    </Container>
    <ItemList
      items={data}
      onDragEnd={changeCategoryOrder}
      selectedCategory={selectedCategory}
      onClick={changeCategory}
      toggleModal={toggleModal(FORMTYPE[2])}
      component={{
        type: Category,
        propMapping: { ref: 'divRef', item: 'category' }
      }}
    />
  </Container>
)

export default connect(stateToProps)(LeftBar)
