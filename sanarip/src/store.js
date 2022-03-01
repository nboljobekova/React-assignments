import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { BanksReducers } from "./reducers/BanksReducers";
import { TransactionsReducers } from "./reducers/TransactionsReducers";

import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";


const rootReducer = combineReducers({
    banks: BanksReducers,
    transactions: TransactionsReducers
});

export const history = createBrowserHistory();

const store = createStore(
    rootReducer, 
    compose(...[
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ].filter(v => v))
)

export default store;