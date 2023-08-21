import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import apiSlice from "./apiSlice";

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware, apiSlice.middleware),
    });

    sagaMiddleware.run(rootSaga);
    return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: true });
