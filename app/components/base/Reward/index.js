import style from './reward.scss'
import { Actions } from 'jumpstate'

const fallBackLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_None_%28square%29.svg/300px-Flag_of_None_%28square%29.svg.png'

const clearItem = (index, type) => () =>  Actions.main.setItemToRemove({ index, type })

const Reward = ({ order, reward, divRef, ...rest }) => {
  return (
  <div className={style.reward} ref={divRef} {...rest}>
    <div className={style.info}>
      <h4>
        {order}
        .
      </h4>
      <div className="img-wrapper">
        <img alt="reward_logo" src={reward.brand_logo || fallBackLogo} />
      </div>
      <p>{reward.title}</p>
      <p>{reward.expiring}</p>
      <div className={style.action}>
        <p><i className='material-icons'>swap_vert</i></p>
        <p><i className='material-icons'>edit</i></p>
        <p onClick={clearItem(order - 1, 'reward')}>
          <i className='material-icons'>clear</i>
        </p>
      </div>
    </div>
  </div>
)}

export default Reward
