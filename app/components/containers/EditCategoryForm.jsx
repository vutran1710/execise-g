import { Field, reduxForm } from 'redux-form'
import { Actions } from 'jumpstate'
import { TextArea, Input } from '../utils/FormInputs'
import Container from '../base/Container'
import Button from '../base/Button'

const editCategory = value => Actions.main.editCategory({ ...value })
const closeModal = () => Actions.main.toggleModal()

const EditCategoryForm = ({ handleSubmit }) => (
  <Container padded>
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="category-title" className="form-control">
        <span>Title</span>
        <Field
          component={Input}
          name="title"
          placeholder="E.g. Food & Beverage"
        />
      </label>
      <label htmlFor="category-description" className="form-control">
        <span>Description</span>
        <Field
          component={TextArea}
          name="description"
          placeholder="Insert text here..."
        />
      </label>
      <div className="button-wrapper">
        <Button btn="primary-bg" type="submit" title="Save" />
        <Button onClick={closeModal} title="Cancel" />
      </div>
    </form>
  </Container>
)

export default reduxForm({
  form: 'categoryForm',
  initialValues: { rewards: [] },
  onSubmit: editCategory,
  onSubmitSuccess: () => setTimeout(closeModal, 200)
})(EditCategoryForm)
