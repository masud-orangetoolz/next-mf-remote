import {all} from "redux-saga/effects";
import usersSaga from "./features/users/usersSaga";

export default function* rootSaga() {
    yield all([
        usersSaga(),
    ]);
}
