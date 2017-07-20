import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers.js'

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(logger));

store.dispatch({type: "ADD_CNT", payload: 5});
store.dispatch({type: "ADD_CNT", payload: 10});

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
