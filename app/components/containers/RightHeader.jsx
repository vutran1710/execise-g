import Button from '../base/Button'
import Container from '../base/Container'

const RightHeader = ({ title, onClick }) => (
  <Container className="right-header">
    <h4>{title}</h4>
    <Button title="+ Add Reward" btn="primary" onClick={onClick} />
  </Container>
)

export default RightHeader
