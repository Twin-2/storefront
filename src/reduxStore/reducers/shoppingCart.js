let initialState = {
  cart: [],
};

// a reducer is a pure function that is meant to eval an action type
const shoppingCart = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      if (state.cart.includes(payload)) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, payload] };
      }
    case "REMOVE_FROM_CART":
      console.log(payload);
      let newCart = state.cart.filter((item) => item !== payload);
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

// an action creator is a function that RETURNS an ACTION
export const addToCart = (item) => {
  // action is an object literal with a type and a payload (optional)
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (item) => {
  // action is an object literal with a type and a payload (optional)
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export default shoppingCart;
