### Input

```js
const { Input } = require('.');
<Input placeholder="text input" type="text" meta={{touch: false}} />
```

### TextArea

```js
const { TextArea } = require('.');

class TextAreaDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'placeholder' };
    }

    changeText(value) {
        this.setState({ value });
    }

    render() {
        return(<TextArea limit={5} input={{ value: this.state.value, onChange: this.changeText.bind(this) }}/>);
    }
}

<TextAreaDemo />
```
