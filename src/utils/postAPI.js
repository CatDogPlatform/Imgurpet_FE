import axiosClient from "./axiosCustomize";
const postApi = {
  getAll: (params) => {
    const url = "/posts?search=";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: null, // by default: false
      },
    });
  },
  getPostRejected: (params) => {
    const url = "/posts/rejectedposts?search=";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: null, // by default: false
      },
    });
  },
};
export default postApi;
