import style from './style.scss'

const Input = ({ input = {}, size, ...rest }) => (
  <div className={style[size]}>
    <input {...input} {...rest} className="input-text" />
  </div>
)

export default Input
