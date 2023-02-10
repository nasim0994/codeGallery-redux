import { FILTER_BY_CATEGORY, REMOVE_FILTER } from "../actionTypes/actionTypes";

const initialState = {
  category: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case REMOVE_FILTER:
      return {
        ...state,
        category: "",
      };

    default:
      return state;
  }
};
export default filterReducer;
