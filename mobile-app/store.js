import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { notificationsReducer } from './src/reducers/notifications';
import { imagesReducer } from './src/reducers/images';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    notifications: notificationsReducer,
    images: imagesReducer
});

const store = createStore(
    reducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
