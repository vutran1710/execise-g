import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import { FORMTYPE } from '../../manage/state'

import Container from '../base/Container'
import Modal from '../base/Modal'

import AddCategoryForm from './Forms/AddCategoryForm'
import AddRewardForm from './Forms/AddRewardForm'
import EditCategoryForm from './Forms/EditCategoryForm'
import EditRewardForm from './Forms/EditRewardForm'

import LeftBar from './LeftBar'
import RightContainer from './RightContainer'
import DeleteItem from './DeleteItem'

const stateToProps = ({ main }) => ({
  selectedCategory: main.selectedCategory,
  showModal: main.showModal,
  formType: main.formType,
  data: main.data,
  rewardToEdit: main.data[main.selectedCategory].rewards[main.itemToModify.index]
})

const toggleModal = () => Actions.main.toggleModal()

const Main = ({ formType, showModal, selectedCategory, data, rewardToEdit }) => (
  <Container className="flex-container">
    <LeftBar />
    <RightContainer />
    <Modal title={formType} onClose={toggleModal} toggle={showModal}>
      {formType === FORMTYPE[0] && <AddCategoryForm />}
      {formType === FORMTYPE[1] && <AddRewardForm />}
      {formType === FORMTYPE[2] && <EditCategoryForm initialValues={data[selectedCategory]} />}
      {formType === FORMTYPE[3] && <EditRewardForm initialValues={rewardToEdit} />}
      {formType === FORMTYPE[4] && <DeleteItem />}
    </Modal>
  </Container>
)

export default connect(stateToProps)(Main)
