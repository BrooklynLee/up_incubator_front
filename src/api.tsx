import axios from "axios";

// const callApi = async (method: any, path: any, data: any, jwt: any) => {
const callApi = async (method: any, path: any, data?: any, jwt?: any) => {
    const headers = {
        Authorization: jwt,
        contentType: "application/json; charset=utf-8",
    };
    const baseUrl = "/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if (method === "get") {
        return axios.get(fullUrl, { headers });
    }
    else if (method === "delete") {
        return axios.delete(fullUrl, { headers });
    }
    else {
        return axios.post(fullUrl, data, { headers });
    }
    // if (method === "get" || method === "delete") {
    //     return axios[method](fullUrl, { headers });
    // } else {
    //     return axios[method](fullUrl, data, { headers });
    // }
};

export default {
    // createAccount: form => callApi("post", "/users/", form),
    login: (form: any) => callApi("post", "/users/login/", form),
    favs: (id: number) => callApi("get", `/users/${id}/favs/`),
    features: (page: number = 1) => callApi("get", `/features/?page=${page}`),
    toggleFavs: (userId: number, featureId: number, token: any) =>
        callApi("put", `/users/${userId}/favs/`, { pk: featureId }, token)
}; 