import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

function reducer(state = {cnt:0}, action)
{
    if (action.type === "ADD_CNT")
    {
        return {cnt: state.cnt + action.payload};
    }
    return state;
}

store.dispatch({type: "ADD_CNT", payload: 5});
store.dispatch({type: "ADD_CNT", payload: 10});

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
