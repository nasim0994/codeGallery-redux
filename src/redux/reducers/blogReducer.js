import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_A_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  histories: [],
  blog: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };

    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case DELETE_CONTENT:
      if (state.blogs.filter((blog) => blog._id !== action.payload)) {
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        };
      }
      return state;

    case ADD_TO_HISTORY:
      if (!state.histories.find((blog) => blog._id === action.payload._id)) {
        return {
          ...state,
          histories: [...state.histories, action.payload],
        };
      }
      return state;

    default:
      return state;
  }
};
export default blogReducer;
