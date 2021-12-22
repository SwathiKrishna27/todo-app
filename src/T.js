import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }
    updateSubmit(event) {
        alert('You have entered the ToDo successfully.');
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h1>TODO LIST</h1>
                <label>TODO:
                    <input type="text" ref={this.input} />
                </label>
            
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default App;