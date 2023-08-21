import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../services/cookie.service";

const baseQueryMiddleware = fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: async (headers /*, { getState, endpoint }*/) => {
        const token =
            CookieService.getCookie(process.env.NEXT_PUBLIC_JOB_SEEKER_ACCESS_TOKEN) ||
            CookieService.getCookie(process.env.NEXT_PUBLIC_EMPLOYER_ACCESS_TOKEN);
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "employerAndJobSeeker",
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQueryMiddleware(args, api, extraOptions);
        const { error } = result || {};
        if (error) {
            console.log("Error::: ", error);
        }

        return result;
    },
    tagTypes: [],
    endpoints: () => ({}),
});

export default apiSlice;
