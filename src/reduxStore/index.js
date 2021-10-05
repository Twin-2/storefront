import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

let reducers = combineReducers({ categoryReducer, productReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

console.log("_REDUX_STORE_", store());

export default store();
