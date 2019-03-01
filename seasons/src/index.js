import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // only time we do direct assignment to state
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (data) => {
                // aways use setState to change the state
                this.setState({lat: data.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
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
                <div>
                    Latitude: {this.state.lat}
                </div>
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