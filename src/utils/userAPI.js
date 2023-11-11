import axiosClient from "./axiosCustomize";
const userApi = {
  bannedUser: (id) => {
    const url = `/user/members/${id}/ban`;
    return axiosClient.put(url);
  },
  unBannedUser: (id) => {
    const url = `/user/members/${id}/unban`;
    return axiosClient.put(url);
  },
};

export default userApi;
