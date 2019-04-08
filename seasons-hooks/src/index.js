import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (data) => this.setState({lat: data.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    // to exemplify that the return can be in a function and
    // can be put inside a div for example (when called)
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        } else if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
            );
            
        }
        return (
                <Spinner message='Waiting for your permition'></Spinner>
        );
    }

    render() {
        return (
            this.renderContent()
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));