import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {

    state = {language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag br" onClick={() => this.onLanguageChange('portuguese')} />
                </div>
                <UserCreate />
            </div>
        );
    }
}

export default App;