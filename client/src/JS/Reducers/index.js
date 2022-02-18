import { combineReducers } from "redux";
import userReducer from "./user";
import devReducer from "./developers";
import allPostsReducer from "./allPosts"
const rootReducer = combineReducers({ userReducer, devReducer, allPostsReducer});

export default rootReducer;
