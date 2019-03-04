import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends Component {

    onTermSubmit = (term) => {
        youtube.get('/search', {
            q: term // q = query
        })
        .then((data) => console.log(data));
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;