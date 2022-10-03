import { combineReducers } from "redux";

//Other reducers
import AllPostReducer from "./AllPostReducer";

const rootReducer = combineReducers({
    allPosts: AllPostReducer,
})

export default rootReducer