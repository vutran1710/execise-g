import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import { FORMTYPE } from '../../manage/state'
import Container from '../base/Container'
import Modal from '../base/Modal'

import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import ItemList from './ItemList'
import Category from '../base/Category'
import Reward from '../base/Reward'
import NoReward from '../base/NoReward'
import AddCategoryForm from './AddCategoryForm'
import AddRewardForm from './AddRewardForm'

const stateToProps = ({ main }) => ({
  selectedCategory: main.selectedCategory,
  showModal: main.showModal,
  formType: main.formType,
  data: main.data
})

const changeCategory = number => Actions.main.changeCategory(number)
const changeCategoryOrder = (categories, idx) => Actions.main.changeCategoryOrder([categories, idx])
const changeRewardOrder = rewards => Actions.main.changeRewardOrder([rewards])
const toggleModal = formType => () => {
  Actions.main.setFormType(formType)
  Actions.main.toggleModal()
}

const Main = ({ formType, showModal, selectedCategory, data }) => {
  const { rewards } = data[selectedCategory]
  const [FORM_TYPE_1, FORM_TYPE_2] = FORMTYPE
  const { title } = data[selectedCategory]
  const modalTitle = formType === FORM_TYPE_1 ? 'Add Category' : 'Add Reward'
  return (
    <Container className='flex-container'>
      <Container className='left-container'>
        <LeftHeader onClick={toggleModal(FORM_TYPE_1)} />
        <ItemList
          items={data}
          onDragEnd={changeCategoryOrder}
          selectedCategory={selectedCategory}
          onClick={changeCategory}
          component={{
            type: Category,
            propMapping: { ref: 'divRef', item: 'category', }
          }}
        />
      </Container>
      <Container padded className='bg-7'>
        <RightHeader onClick={toggleModal(FORM_TYPE_2)} title={title} />
        { rewards.length > 0
          ? (
            <ItemList
              items={rewards}
              onDragEnd={changeRewardOrder}
              component={{
                type: Reward,
                propMapping: { ref: 'divRef', item: 'reward' }
              }}
            />
          )
          : (<NoReward title='No reward' content='Create new one here' onClick={toggleModal(FORM_TYPE_2)} />) }
      </Container>
      <Modal title={modalTitle} onClose={toggleModal()} toggle={showModal}>
        {formType === FORM_TYPE_1 && <AddCategoryForm />}
        {formType === FORM_TYPE_2 && <AddRewardForm />}
      </Modal>
    </Container>
  )
}


export default connect(stateToProps)(Main)
