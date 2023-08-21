import axios from "axios";
import CookieService from "../cookie.service";
import { errorResponseBody, responseBody } from "./httpResponseHandler";

const httpRequestJs = {
    get: (url = "", params = {}) =>
        axios
            .get(url, {
                params: params,
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.NEXT_PUBLIC_JOB_SEEKER_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    post: (url = "", body = {}) =>
        axios
            .post(url, body, {
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.NEXT_PUBLIC_JOB_SEEKER_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    put: (url = "", body = {}) =>
        axios
            .put(url, body, {
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.NEXT_PUBLIC_JOB_SEEKER_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    delete: (url = "", params = {}) =>
        axios
            .delete(url, {
                params: params,
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.NEXT_PUBLIC_JOB_SEEKER_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),
};

export default httpRequestJs;
