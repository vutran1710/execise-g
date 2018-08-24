import style from './noreward.scss'
import Button from '../Button'

const NoReward = ({ title, content, onClick }) => (
  <div className={style.nodata}>
    <h4>{title}</h4>
    <p>{content}</p>
    <Button btn="primary-bg" title="+ Create reward" onClick={onClick} />
  </div>
)

export default NoReward
