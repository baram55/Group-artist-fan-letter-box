import { createStore } from "redux";
import { combineReducers } from "redux";
import selectedMember from "../modules/selectedMember";
import comments from "../modules/comments";

const rootReducer = combineReducers({
  selectedMember: selectedMember,
  comments: comments, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;
