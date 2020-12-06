import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = initStates => createStore(
	rootReducer,
	initStates,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store;
