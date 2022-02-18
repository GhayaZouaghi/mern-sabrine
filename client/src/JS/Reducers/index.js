import { combineReducers } from "redux";
import userReducer from "./user";
import devReducer from "./developers";
import postReducer from "./post";
import allPostsReducer from "./allPosts"
const rootReducer = combineReducers({ userReducer, devReducer, postReducer, allPostsReducer});

export default rootReducer;
