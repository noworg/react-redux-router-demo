import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/reducer.jsx';
import thunkMiddleware from 'redux-thunk';

export default function configStore(preloadedState) {
    const store = createStore(rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware));
    return store;
}