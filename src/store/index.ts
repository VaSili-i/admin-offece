import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducer/users";
import { newsReducers } from "./reducer/news";
import { reducerStaffingStructure } from "./reducer/staffingStructure";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducers,
    staffing: reducerStaffingStructure
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState> 