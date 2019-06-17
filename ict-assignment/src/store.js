import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import DataReducer from "./reducers/DataReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  data: DataReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;