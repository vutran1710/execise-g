import style from './container.scss'

const Container = ({ children, padded = false, className }) => (
  <div className={`${style[!padded ? 'standard' : 'padded']} ${className}`}>
    {children}
  </div>
)

export default Container
