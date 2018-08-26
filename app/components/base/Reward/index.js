import { Actions } from 'jumpstate'
import style from './reward.scss'

const fallBackLogo = 'http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg'

const clearItem = (index, type) => () => Actions.main.setItemToRemove({ index, type })
const setRewardToEdit = (index, type) => () => Actions.main.setRewardToEdit({ index, type })

const Reward = ({ order, reward, divRef, ...rest }) => (
  <div className={style.reward} ref={divRef} {...rest}>
    <div className={style.info}>
      <h4>
        {order}
        .
      </h4>
      <div className="img-wrapper">
        <img alt="reward_logo" 
          src={reward.brand_logo || fallBackLogo} 
          onError={(e)=>{e.target.src=fallBackLogo}} />
      </div>
      <p>{reward.title}</p>
      <p>{reward.expiring}</p>
      <div className={style.action}>
        <p><i className='material-icons'>swap_vert</i></p>
        <p onClick={setRewardToEdit(order -1, 'reward')}>
          <i className='material-icons'>edit</i>
        </p>
        <p onClick={clearItem(order - 1, 'reward')}>
          <i className='material-icons'>clear</i>
        </p>
      </div>
    </div>
  </div>
)

export default Reward
