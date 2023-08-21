import apiSlice from "../../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserList: builder.query({
            query: (params) => ({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                params: params,
            }),
        }),
    }),
});

export const { useGetUserListQuery } = userApiSlice;
