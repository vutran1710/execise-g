###### Selector
Note: no ReduxForm wrapping!

Use Field from ReduxForm for wrapping with default export
```js
const Selector  = require('.').BareSelector;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class App extends React.Component {
  constructor() {
    this.state = {
      selectedOption: { value: 'Nothing' },
    }
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption })
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <h4>Selected Value: {selectedOption && selectedOption.value}</h4>
        <br />
        <Selector
          value={selectedOption}
          onChange={this.handleChange.bind(this)}
          options={options}
        />
      </div>
    )
  }
}

<App />
```
