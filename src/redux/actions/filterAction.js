import { FILTER_BY_CATEGORY, REMOVE_FILTER } from "../actionTypes/actionTypes";

export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  };
};

export const removeFilter = () => {
  return {
    type: REMOVE_FILTER,
  };
};
