import React, { Component } from 'react';

class SearchBar extends Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Image search..." 
                            onChange={this.onInputChange} />
                        <i className="search icon" />
                    </div> 
                </form> 
            </div>
        );
    }
}

export default SearchBar;