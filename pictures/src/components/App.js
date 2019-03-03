import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    state = { images: [] };

    async onSearchBarSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                    Authorization: 'Client-ID 3b0605464256a33b9c3b041e5ee90345c429f1d08ad684cc87636409b09dec42'
                }
        });
        console.log(response.data.results[0].urls);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchBarSubmit}
                // is not mandatory the name of this callback to be onSubmit, 
                // I used this because it makes sense in this case
                />
            </div>
        );
    }
}

export default App;