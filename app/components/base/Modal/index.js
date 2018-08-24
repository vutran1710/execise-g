import style from './modal.scss'

export default class Modal extends React.Component {
  el = null

  constructor(props) {
    super(props)
    this.state = { showRealModal: props.defaultIsShown }
  }

  componentDidUpdate(prevProps) {
    const { toggle } = this.props
    if (!prevProps.toggle && toggle) {
      /* eslint-disable-next-line */
      this.setState({ showRealModal: true })
    } else if (prevProps.toggle && !toggle) {
      this.el.classList.add('modal-unmount')
      setTimeout(() => this.setState({ showRealModal: false }), 200)
    }
  }

  render() {
    const { title, children, onClose, defaultIsShown } = this.props
    const { showRealModal } = this.state
    const modalClass = `${style.modalWrapper} modal-init`

    if (showRealModal || defaultIsShown) {
      return (
        <div className={modalClass} ref={el => { this.el = el }}>
          <div>
            <div>
              <h4>{title}</h4>
              <p>
                <button onClick={onClose} type="button" className="icon">
                  <i className="material-icons">clear</i>
                </button>
              </p>
              {children}
            </div>
          </div>
        </div>
      )
    }

    return null
  }
}
