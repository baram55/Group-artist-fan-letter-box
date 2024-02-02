const SET_MEMBER = "SET_MEMBER";

export const setMember = (payload) => {
  return {
    type: SET_MEMBER,
    payload,
  };
};

const initialState = {
  member: "카리나",
};

// 리듀서
const selectedMember = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER:
      return {
        member: action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default selectedMember;
