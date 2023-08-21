import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import apiSlice from "./apiSlice";
import usersSlice from "./features/users/usersSlice";

const combinedReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersSlice,
});

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export default rootReducer;
