import { call, put, takeLatest, delay, all } from 'redux-saga/effects'

import usersService from "../../../services/users.service";
import {getAllUsersLisFailed, getAllUsersLisSuccess, getUsersDataFailed, getUsersDataSuccess} from "./usersSlice";


function* usersWatcher() {
    yield takeLatest("users/getUsersData", getUsersDataSaga);
    yield takeLatest("users/getAllUsersLisData", getAllUsersListDataSaga);
}

function* getUsersDataSaga(action) {
    try {
        const responseData = yield call(usersService.getUsersData, action.payload);
        yield delay(1000);

        const response = { success: true, data: responseData };

        if (response.success) {
            yield put(getUsersDataSuccess(response.data));
        } else {
            yield put(getUsersDataFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* getAllUsersListDataSaga(action) {
    try {
        const responseData = yield call(usersService.getAllUsersListData, action.payload);

        const response = { success: true, data: responseData };

        if (response.success) {
            yield put(getAllUsersLisSuccess(response.data));
        } else {
            yield put(getAllUsersLisFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default function* usersSaga() {
    yield all([usersWatcher()]);
}
