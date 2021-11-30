import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import authReducer from "./user/authentication/authReducer"

const rootReducers = combineReducers({
    user: userReducer,
    auth: authReducer
});

export default rootReducers;