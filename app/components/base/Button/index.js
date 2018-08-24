import style from './button.scss'

const Button = ({ onClick, title, btn, type = 'button', disabled }) => (
  <button
    onClick={onClick}
    className={style[btn]}
    disabled={!!disabled}
    type={type}
  >
    {title || 'Title'}
  </button>
)

export default Button
