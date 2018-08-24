###### TextArea

```js
class TextAreaDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'placeholder' };
    }

    changeText(value) {
        this.setState({ value });
    }

    render() {
        return(<TextArea input={{ value: this.state.value, onChange: this.changeText.bind(this) }}/>);
    }
}

<TextAreaDemo />
```
