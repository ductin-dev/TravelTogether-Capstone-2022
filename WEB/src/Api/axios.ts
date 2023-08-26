import axios from "axios";
const BASE_URL = process.env.CONFIG_SERVICE;
export default axios.create({
  baseURL: BASE_URL,
});

// get token from local storage
const _user = localStorage.getItem("user");
let user: any = null;
if (_user) {
  user = JSON.parse(_user);
}

export const axiosPrivate =
  user && user.accessToken
    ? axios.create({
        baseURL: BASE_URL,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
    : axios.create({
        baseURL: BASE_URL,
      });
