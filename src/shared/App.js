import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Work, Study, Logs } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/study" component={Study}/>
                <Route path="/logs" component={Logs}/>
            </div>
        );
    }
}

export default App;