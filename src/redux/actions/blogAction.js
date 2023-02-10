import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

export const fetchBlogs = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addNewBlog = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updatedBlog = (blog) => {
  return {
    type: UPDATE_CONTENT,
    payload: blog,
  };
};

export const addToHistory = (id) => {
  return {
    type: ADD_TO_HISTORY,
    payload: id,
  };
};
