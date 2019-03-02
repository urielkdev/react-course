import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (data) => this.setState({lat: data.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    render() {
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
            <div>
                loading
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));