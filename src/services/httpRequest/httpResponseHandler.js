export const responseBody = (response) => {
    return response.data;
};

export const errorResponseBody = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const backendError = error.response.data || {};
        // console.log(backendError);
        if (backendError.code === 401 || backendError.message === "Please authenticate") {
            if (window.employerLogOut) window.employerLogOut();
        }
        return backendError;
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error: axios ", error.message);
    }
};
