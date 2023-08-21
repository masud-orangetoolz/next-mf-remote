import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    page: 1,
    perPage: 10,
    total: 0,
    isLoading: false,
    isError: false,
    error: "",
    allUserListData: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        getUsersData: (state) => {
            state.isLoading = true;
        },
        getUsersDataSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.error = "";
        },
        getUsersDataFailed: (state, action) => {
            state.data = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },

        getAllUsersLisData: (state) => {
            state.isLoading = true;
        },
        getAllUsersLisSuccess: (state, action) => {
            state.allUserListData = action.payload.data;
            state.isLoading = false;
            state.isError = false;
            state.error = "";
        },
        getAllUsersLisFailed: (state, action) => {
            state.allUserData = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    },
});

export const {
    getUsersData,
    getUsersDataSuccess,
    getUsersDataFailed,
    getAllUsersLisData,
    getAllUsersLisSuccess,
    getAllUsersLisFailed
} = usersSlice.actions;

export default usersSlice.reducer;
