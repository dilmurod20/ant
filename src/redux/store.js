import {applyMiddleware, combineReducers, createStore} from "redux";
import xodimlarReducer from "./reducers/xodimlarReducer";
import lavozimlarReducer from "./reducers/lavozimlarReducer";
import ilmiy_darajaReducer from "./reducers/ilmiy_darajaReducer";
import logger from "redux-logger";

export const store = createStore(combineReducers({
    xodimlarReducer,
    lavozimlarReducer,
    ilmiy_darajaReducer
}), applyMiddleware(logger))