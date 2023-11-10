import axiosClient from "./axiosCustomize";
const userApi = {
  bannedUser: (id) => {
    const url = `/user/members/${id}/ban`;
    return axiosClient.put(url);
  },
};
export default userApi;
