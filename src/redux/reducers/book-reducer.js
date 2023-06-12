import { ActionType } from "../constants/action-types";
const initialState = {
  books: [],
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_BOOKS:
      return {
        ...state,
        books: payload,
      };
    default:
      return state;
  }
};

export const selectedBookReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_BOOK:
      return {
        ...state,
        ...payload,
      };
    case ActionType.REMOVE_BOOK:
      return {};
    default:
      return state;
  }
};
