import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {

    state = {language: 'english', buttonColor: 'primary'}

    onLanguageChange = (language, color) => {
        this.setState({language, buttonColor: color});
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english', 'primary')} />
                    <i className="flag br" onClick={() => this.onLanguageChange('portuguese', 'red')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.buttonColor}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;