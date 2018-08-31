import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import { FORMTYPE } from '../../manage/state'

import Container from '../base/Container'
import Reward from '../base/Reward'
import NoReward from '../base/NoReward'
import Button from '../base/Button'

import ItemList from './ItemList'

const stateToProps = ({ main }) => ({
  selectedCategory: main.selectedCategory,
  data: main.data
})

const changeRewardOrder = rewards => Actions.main.changeRewardOrder([rewards])
const toggleModal = formType => () => {
  Actions.main.setFormType(formType)
  Actions.main.toggleModal()
}

const RightContainer = ({ selectedCategory, data }) => {
  const { rewards } = data[selectedCategory]
  const { title } = data[selectedCategory]
  return (
    <Container className="bg-7" padded>
      <Container className="right-header">
        <h4>{title}</h4>
        <Button title="+ Add Reward" btn="primary" onClick={toggleModal(FORMTYPE[1])} />
      </Container>
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
  )
}

export default connect(stateToProps)(RightContainer)
