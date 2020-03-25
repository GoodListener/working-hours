import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter basename="/working-hours">
        <App/>
    </BrowserRouter>
);

export default Root;