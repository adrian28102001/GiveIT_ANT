import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";
import authToken from "../utils/authToken";

const store = createStore(rootReducers, applyMiddleware(thunk));


export default store;