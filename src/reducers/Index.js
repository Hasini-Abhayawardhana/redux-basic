import { combineReducers } from "redux";

//Other reducers
import AllPostReducer from "./AllPostReducer";
import SelectedPostReducer from "./SelectedPostReducer"

const rootReducer = combineReducers({
    allPosts: AllPostReducer,
    selectedPost: SelectedPostReducer
})

export default rootReducer