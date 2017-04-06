import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Title:  {this.props.title}</h1>
                <p>Message: {this.props.message}</p>
                <p>age:  {this.props.age}</p>
                <p>new text</p>
            </div>
        );
    }
}

class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let title = this.refs.title.value;
        let message = this.refs.message.value;
        let age = this.refs.age.value;

        let newValue = {
            title: title,
            message: message,
            age: age
        };

        this.props.newValue(newValue);

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Title here"/><br />
                <input type="text" ref="message" placeholder="Message here"/><br />
                <input type="text" ref="age" placeholder="Age here"/><br />
                <hr />
                <button>Submit</button>
            </form>
        );
    }
}

class Greeter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "new title",
            message: "new Message",
            age: 0
        };

        this.newValue = this.newValue.bind(this);
    }

    newValue(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div>
                <Message title={this.state.title} message={this.state.message} age={this.state.age}/>
                <MessageInput newValue={this.newValue}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);