import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        // make de callback to the parent component
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Image search..."
                            // value is assign to transform our input into a controlled input
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})} />
                        <i className="search icon" />
                    </div> 
                </form> 
            </div>
        );
    }
}

export default SearchBar;