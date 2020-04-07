import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Work, Study, Logs, Signup } from '../pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const Root = ({ store, persistor }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router basename="/working-hours">
                    <Route exact path="/" component={Home}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/study" component={Study}/>
                    <Route path="/logs" component={Logs}/>
                    <Route path="/signup" component={Signup}/>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default Root;