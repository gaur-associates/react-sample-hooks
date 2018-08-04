import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

//const logger = createLogger();
//const store = createStore(allReducers, applyMiddleware(logger));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch({ type: "ADD_CNT", payload: 5 });
store.dispatch({ type: "ADD_CNT", payload: 10 });

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
