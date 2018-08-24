import Button from '../base/Button'
import Container from '../base/Container'

const LeftHeader = ({ onClick }) => (
  <Container className="left-header">
    <Button title="+ Add Category" btn="primary" onClick={onClick} />
  </Container>
)

export default LeftHeader
