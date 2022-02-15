import { combineReducers } from "redux";
import userReducer from "./user";
import devReducer from "./developers";
import postReducer from "./post";

const rootReducer = combineReducers({ userReducer, devReducer, postReducer });

export default rootReducer;
