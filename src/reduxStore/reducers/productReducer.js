import axios from "axios";

let initialState = {
  activeProducts: [],
};

// a reducer is a pure function that is meant to eval an action type
const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    // case "ACTIVATE_CATEGORY":
    //   const filteredProducts = state.products.filter(
    //     (product) => product.category === payload
    //   );
    //   return { ...state, activeProducts: filteredProducts };
    case "GET_ACTIVATE_PRODUCTS":
      return { ...state, activeProducts: payload };
    // make this update the api
    case "ADD_TO_CART":
      state.activeProducts.map((item) => {
        if (item === payload) {
          item.inStock--;
        }
        return item;
      });
      return state;
    // make this update the api
    case "REMOVE_FROM_CART":
      state.activeProducts.map((item) => {
        if (item === payload) {
          item.Stock++;
        }
        return item;
      });
      return state;
    default:
      return state;
  }
};

export const asyncGetProducts = (category) => async (dispatch) => {
  const productResponse = await axios.get(
    `${process.env.REACT_APP_PRODUCTS_API}?category=${category}`
  );
  dispatch(getActiveProducts(productResponse.data.results));
};

// an action creator is a function that RETURNS an ACTION
export const getActiveProducts = (products) => {
  // action is an object literal with a type and a payload (optional)
  return {
    type: "GET_ACTIVATE_PRODUCTS",
    payload: products,
  };
};

export default categoryReducer;
