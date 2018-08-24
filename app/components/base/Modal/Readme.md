##### Default Modal

```js
class ModalDemo extends React.Component {
  constructor() { this.state = { showModal: false } }
  toggleModal() { this.setState({ showModal: !this.state.showModal }) }
  render() {
    return (
      <div>
        <Modal title="Add reward" toggle={this.state.showModal} onClose={this.toggleModal.bind(this)}>
          <div>Hello there</div>
        </Modal>
        <br />
        <button onClick={_ => this.toggleModal()}>
          Toggle Modal!
        </button>
      </div>
    )
  }
}

<ModalDemo />

```
