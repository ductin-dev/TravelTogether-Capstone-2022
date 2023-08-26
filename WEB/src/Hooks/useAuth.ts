import { useContext, useDebugValue } from "react";
import AuthContext from "../Context/AuthContext";

const useAuth = () => {
  //get item from localstorage

  let user: any;

  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
  }
  if (user && user.accessToken != "") {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

export default useAuth;
