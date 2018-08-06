import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { messageReducer } from './src/reducers/message';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    message: messageReducer
});

const store = createStore(
    reducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
