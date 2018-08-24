import style from './textarea.scss'

const TextArea = ({ input: { value, onChange }, rows = 10, placeholder }) => (
  <textarea
    className={style.standard}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    rows={rows}
  />
)

export default TextArea
