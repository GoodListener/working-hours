import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router/Root';
import { createStore } from 'redux';
import userReducer from './store/user';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import './index.css';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
    key: 'root',
    storage
};

const enhancedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(enhancedReducer);
const persistor = persistStore(store);

ReactDOM.render(<Root store={store} persistor={persistor}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
