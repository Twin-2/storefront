import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import shoppingCart from "./reducers/shoppingCart";
import thunk from "redux-thunk";

let reducers = combineReducers({
  categoryReducer,
  productReducer,
  shoppingCart,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

console.log("_REDUX_STORE_", store());

export default store();
