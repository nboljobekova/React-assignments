import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import CardsReducer from "./reducers/CardsReducers"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cards: CardsReducer
})

const store = createStore(
    rootReducer,
    compose(...[
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ].filter(v => v))
)

export default store