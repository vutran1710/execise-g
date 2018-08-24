import style from './reward.scss'

const Reward = ({ order, reward, divRef, ...rest }) => (
  <div className={style.reward} ref={divRef} {...rest}>
    <div className={style.info}>
      <h4>
        {order}
        .
      </h4>
      <div className="img-wrapper">
        <img alt="reward" src={reward.brand_logo} />
      </div>
      <p>{reward.title}</p>
      <p>{reward.expiring}</p>
      <div className={style.action}>
        <p><i className='material-icons'>swap_vert</i></p>
        <p><i className='material-icons'>edit</i></p>
        <p><i className='material-icons'>clear</i></p>
      </div>
    </div>
  </div>
)

export default Reward
