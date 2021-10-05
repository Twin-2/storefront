let initialState = {
  products: [
    {
      name: "Apple",
      category: "Food",
      description: "Fuji",
      price: "$1",
      inventory: 1000000,
    },
    {
      name: "Shirt",
      category: "Clothes",
      description: "RuneScape logo",
      price: "$10",
      inventory: 10,
    },
    {
      name: "Star Realms",
      category: "Games",
      description: "Deck building game",
      price: "$10",
      inventory: 0,
    },
    {
      name: "Pineapple",
      category: "Food",
      description: "pokey",
      price: "$3",
      inventory: 1000,
    },
  ],
};

// a reducer is a pure function that is meant to eval an action type
const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVATE_CATEGORY":
      const filteredProducts = initialState.products.filter(
        (product) => product.category === payload
      );
      return { products: filteredProducts };
    default:
      return state;
  }
};

// an action creator is a function that RETURNS an ACTION
export const activate = (category) => {
  // action is an object literal with a type and a payload (optional)
  return {
    type: "ACTIVATE_CATEGORY",
    payload: category,
  };
};

export default categoryReducer;
