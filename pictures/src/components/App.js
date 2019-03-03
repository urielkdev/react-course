import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = { images: [] };

    onSearchBarSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchBarSubmit}
                    // is not mandatory the name of this callback to be onSubmit, 
                    // I used this because it makes sense in this case
                />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;