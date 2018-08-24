import style from './noreward.scss'

const NoReward = ({ title = 'No Reward' }) => (
  <div className={style.nodata}>
    <h4>{title}</h4>
  </div>
)

export default NoReward
