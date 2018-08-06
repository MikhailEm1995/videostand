import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';

import App from './src/App.jsx';

const Entry = () => (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(
    <Entry />,
    document.getElementById('app')
);
