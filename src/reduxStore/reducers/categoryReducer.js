import axios from "axios";

let initialState = {
  categories: [],
  activeCategory: "",
};

// a reducer is a pure function that is meant to eval an action type
const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVATE_CATEGORY":
      return { ...state, activeCategory: payload };
    case "GET_CATEGORIES":
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const asyncGetCategories = () => async (dispatch) => {
  const response = await axios.get(process.env.REACT_APP_CATEGORIES_API);
  dispatch(getCategories(response.data.results));
};

const getCategories = (payload) => {
  return {
    type: "GET_CATEGORIES",
    payload: payload,
  };
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
