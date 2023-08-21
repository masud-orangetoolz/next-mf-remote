import httpRequestEm from "./httpRequest/httpRequestEm";

class UsersService {
    getUsersData(params) {
        return httpRequestEm.get("https://jsonplaceholder.typicode.com/" + "users", params);
    }
    getAllUsersListData(params) {
        return httpRequestEm.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + "user/list/by/search", params);
    }
}

export default new UsersService();
