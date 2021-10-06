let initialState = {
  categories: [
    {
      name: "Food",
      displayName: "Foods",
      description: "all thingd edible",
    },
    {
      name: "Clothes",
      displayName: "Clothing",
      description: "Cover yourself!",
    },
    {
      name: "Games",
      displayName: "Fun and Games",
      description: "All types of games for all types of players",
    },
  ],
  activeCategory: "Food",
};

// a reducer is a pure function that is meant to eval an action type
const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVATE_CATEGORY":
      //direct manipulation. change.
      return { ...state, activeCategory: payload };
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
