import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import { FORMTYPE } from '../../manage/state'

import Container from '../base/Container'
import Modal from '../base/Modal'
import Reward from '../base/Reward'
import NoReward from '../base/NoReward'
import Category from '../base/Category'

import AddCategoryForm from './Forms/AddCategoryForm'
import AddRewardForm from './Forms/AddRewardForm'
import EditCategoryForm from './Forms/EditCategoryForm'
import EditRewardForm from './Forms/EditRewardForm'

import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import ItemList from './ItemList'
import DeleteItem from './DeleteItem'

const stateToProps = ({ main }) => ({
  selectedCategory: main.selectedCategory,
  showModal: main.showModal,
  formType: main.formType,
  data: main.data,
  rewardToEdit: main.data[main.selectedCategory].rewards[main.itemToModify.index]
})

const changeCategory = number => () => Actions.main.changeCategory(number)
const changeCategoryOrder = (categories, idx) => Actions.main.changeCategoryOrder([categories, idx])
const changeRewardOrder = rewards => Actions.main.changeRewardOrder([rewards])
const toggleModal = formType => () => {
  Actions.main.setFormType(formType)
  Actions.main.toggleModal()
}

const Main = ({ formType, showModal, selectedCategory, data, rewardToEdit }) => {
  const { rewards } = data[selectedCategory]
  const { title } = data[selectedCategory]
  return (
    <Container className="flex-container">
      <Container className="left-container">
        <LeftHeader onClick={toggleModal(FORMTYPE[0])} />
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
      <Container padded className="bg-7">
        <RightHeader onClick={toggleModal(FORMTYPE[1])} title={title} />
        {rewards.length > 0 ? (
          <ItemList
            items={rewards}
            onDragEnd={changeRewardOrder}
            component={{
              type: Reward,
              propMapping: { ref: 'divRef', item: 'reward' }
            }}
          />
        ) : (
          <NoReward />
        )}
      </Container>
      <Modal title={formType} onClose={toggleModal()} toggle={showModal}>
        {formType === FORMTYPE[0] && <AddCategoryForm />}
        {formType === FORMTYPE[1] && <AddRewardForm />}
        {formType === FORMTYPE[2] && <EditCategoryForm initialValues={data[selectedCategory]} />}
        {formType === FORMTYPE[3] && <EditRewardForm initialValues={rewardToEdit} />}
        {formType === FORMTYPE[4] && <DeleteItem />}
      </Modal>
    </Container>
  )
}

export default connect(stateToProps)(Main)
