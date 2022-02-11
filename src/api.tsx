import axios from "axios";

// const callApi = async (method: any, path: any, data: any, jwt: any) => {
const callApi = async (method: any, path: any, data?: any, jwt?: any) => {
  const headers = {
    Authorization: `Bearer ${jwt}`,
    // Authorization: jwt !== undefined ? `Bearer ${jwt}` : "null",
    contentType: "application/json; charset=utf-8",
  };
  //   const baseUrl = "http://127.0.0.1:8000/api/v1";
  const baseUrl = "/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  // console.log(fullUrl);

  if (method === "get") {
    return axios.get(fullUrl, { headers });
  } else if (method === "delete") {
    return axios.delete(fullUrl, { headers });
  } else if (method === "post") {
    return axios.post(fullUrl, data, { headers });
  } else if (method === "put") {
    return axios.put(fullUrl, data, { headers });
  } else {
    return axios.put(fullUrl, data, { headers });
  }
  // if (method === "get" || method === "delete") {
  //     return axios[method](fullUrl, { headers });
  // } else {
  //     return axios[method](fullUrl, data, { headers });
  // }
};

const api_list = {
  // createAccount: form => callApi("post", "/users/", form),
  login: (form: any) => callApi("post", "/users/login/", form),
  favs: (id: number, token: any) =>
    callApi("get", `/users/${id}/favs/`, null, token),
  // features: (token: any, page: number = 1, keyword?: string) =>
  //   callApi("get", `/features/?page=${page}&search=${keyword}`, null, token),
  features: (token: any, page: number = 1) =>
    callApi("get", `/features/?page=${page}`, null, token),
  searchFeatures: (token: any, page: number = 1, keyword?: string) =>
    callApi("get", `/features/?page=${page}&search=${keyword}`, null, token),
  feature: (featureId: number, token: any) =>
    callApi("get", `/features/${featureId}`, null, token),
  toggleFavs: (userId: any, featureId: any, token: any) =>
    callApi("put", `/users/${userId}/favs/`, { pk: featureId }, token),
};

export default api_list;
