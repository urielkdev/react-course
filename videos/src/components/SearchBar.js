import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        // make de callback to the parent component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <div className="ui segment">
                <form onSubmit={this.onFormSubmit}
                    className="ui form">
                        <div className="ui fluid icon input">
                            <input type="text" placeholder="Video search..."
                                value={this.state.term} onChange={this.onInputChange}
                            />
                            <i className="search icon" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
/*
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Image search..."
*/

export default SearchBar;