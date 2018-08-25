import { Actions } from 'jumpstate'
import Container from '../base/Container'
import Button from '../base/Button'

const confirm = () => Actions.main.removeItem()
const cancel = () => Actions.main.toggleModal()

const DeleteItem = () => (
  <Container padded>
    <p>Are you sure you want to delete this item?</p>
    <div className="button-wrapper">
      <Button onClick={cancel} title="Cancel" />
      <Button title="Delete" btn="warning" onClick={confirm} />
    </div>
  </Container>
)

export default DeleteItem
