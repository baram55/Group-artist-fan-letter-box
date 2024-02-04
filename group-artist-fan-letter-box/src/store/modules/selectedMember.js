import members from "data/members";

const SET_MEMBER = "SET_MEMBER";

export const setMember = (payload) => {
  return {
    type: SET_MEMBER,
    payload,
  };
};

const initialState = {
  member: members.KARINA,
};

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

export default selectedMember;
