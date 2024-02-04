import { createStore } from "redux";
import { combineReducers } from "redux";
import selectedMember from "../modules/selectedMember";
import comments from "../modules/comments";

const rootReducer = combineReducers({
  selectedMember,
  comments,
});
const store = createStore(rootReducer);

export default store;
