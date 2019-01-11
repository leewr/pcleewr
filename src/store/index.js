import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import roorReducer from './reducers'

let middleware = [thunk]

export default function configureStore(initialState = {}) {
    // createStore(reducer, [preloadedState], [enhancer])
    const sotre = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
        )
    )
    return sotre
}