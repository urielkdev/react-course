import React, { Component } from 'react';

class App extends Component {
    state = {resource: 'post'};

    render() {
        return (
            <div className="ui container">
                <div>
                    <button onClick={() => this.setState({resource: 'posts'})} className="ui primary button">Posts</button>
                    <button onClick={() => this.setState({resource: 'todos'})} className="ui primary button">Todos</button>
                </div>
                {this.state.resource}
            </div>
        );
    }
}

export default App;