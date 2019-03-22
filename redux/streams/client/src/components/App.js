import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/page-two">Go to page 2</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Go to page 1</Link>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/page-two" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;