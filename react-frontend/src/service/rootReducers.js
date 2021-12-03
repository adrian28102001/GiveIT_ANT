import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import authReducer from "./user/authentication/authReducer"
import postReducer from "./post/postReducer";

const rootReducers = combineReducers({
    user: userReducer,
    post: postReducer,
    auth: authReducer
});

export default rootReducers;