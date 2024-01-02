// reducers/rootReducer.js
import { combineReducers } from "redux";
import profileReducer from "./profile"; // Import your profile reducer
// Import other reducers if you have them

const rootReducer = combineReducers({
  profile: profileReducer,
  // Add other reducers here
});

export default rootReducer;