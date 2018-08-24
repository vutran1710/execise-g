import { Field, reduxForm } from 'redux-form'
import { Actions } from 'jumpstate'
import { TextArea, Input } from '../utils/FormInputs'
import Container from '../base/Container'
import Button from '../base/Button'

const generateId = () => new Date().toISOString()
const addNewReward = value => Actions.main.addNewReward(value)
const closeModal = () => Actions.main.toggleModal()

const AddRewardForm = ({ handleSubmit }) => (
  <Container padded>
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="reward-name" className="form-control">
        <span>Brand Name</span>
        <Field
          component={Input}
          name="name"
          placeholder="E.g. StarBucks"
        />
      </label>
      <label htmlFor="reward-title" className="form-control">
        <span>Title</span>
        <Field
          component={Input}
          name="title"
          placeholder="E.g. 10.000 VND off on total bill"
        />
      </label>
      <label htmlFor="brand_logo" className="form-control">
        <span>Logo Url</span>
        <Field
          component={Input}
          name="brand_logo"
          placeholder="Insert logo image url"
        />
      </label>
      <label htmlFor="reward-description" className="form-control">
        <span>Description</span>
        <Field
          component={TextArea}
          name="description"
          placeholder="Insert text here..."
        />
      </label>
      <div className="button-wrapper">
        <Button type="submit" title="Confirm" btn="primary-bg" />
        <Button onClick={closeModal} title="Cancel" />
      </div>
    </form>
  </Container>
)

export default reduxForm({
  form: 'rewardForm',
  initialValues: { id: generateId() },
  onSubmit: addNewReward,
  onSubmitSuccess: () => setTimeout(closeModal, 200)
})(AddRewardForm)
