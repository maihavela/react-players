import { combineReducers } from "redux";
import { playersReducer } from "./../reducers/playersReducer";

const rootReducer = combineReducers({
  players: playersReducer
});

export default rootReducer;