import commentJson from "fakeData.json";

const SET_COMMENTS = "SET_COMMENTS";

export const setComments = (payload) => {
  return {
    type: SET_COMMENTS,
    payload,
  };
};

const initialData = commentJson;

const initialState = {
  comments: initialData,
};

// 리듀서
const comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        comments: action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default comments;
