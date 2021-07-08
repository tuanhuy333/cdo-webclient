import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers';

import thunk from 'redux-thunk' //import thunk

// redux dev tools
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    //applyMiddleware(...middleware),
    applyMiddleware(thunk),
    // other store enhancers if any
);
export default function configureStore() {
    // let store = createStore(
    //     rootReducer,
    //     applyMiddleware(thunk) // create store sử dụng thunk
    // )
    let store = createStore(
        rootReducer,
        enhancer
    )
    return store
}