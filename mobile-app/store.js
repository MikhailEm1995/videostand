import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { notificationsReducer } from './src/reducers/notifications';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    notifications: notificationsReducer
});

const store = createStore(
    reducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
