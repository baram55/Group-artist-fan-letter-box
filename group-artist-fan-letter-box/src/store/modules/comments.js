import commentJson from "fakeData.json";
import getFormattedDate from "util/getFormattedDate";

const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const editComment = (payload) => {
  return {
    type: EDIT_COMMENT,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};

const initialData = commentJson;

const initialState = {
  comments: initialData,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [action.payload, ...state.comments],
      };
    case EDIT_COMMENT:
      return {
        comments: state.comments.map((item) => {
          const newComment = action.payload;
          if (item.id === newComment.id) {
            item.content = newComment.content;
            item.date = getFormattedDate();
          }
          return item;
        }),
      };
    case DELETE_COMMENT:
      return {
        comments: state.comments.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default comments;
