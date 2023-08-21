import axios from "axios";
import { errorResponseBody, responseBody } from "./httpResponseHandler";

export const httpRequestPublic = {
    get: (url = "", params = {}) => axios.get(url, { params: params }).then(responseBody).catch(errorResponseBody),
    post: (url = "", body = {}) => axios.post(url, body).then(responseBody).catch(errorResponseBody),
    put: (url = "", body = {}) => axios.put(url, body).then(responseBody).catch(errorResponseBody),
    delete: (url = "", params = {}) =>
        axios.delete(url, { params: params }).then(responseBody).catch(errorResponseBody),
};

export default httpRequestPublic;
