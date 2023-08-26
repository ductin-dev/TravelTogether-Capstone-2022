import React from "react";

const useLocalStorage = () => {
  let user: any;

  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
  }
  if (user && user.accessToken != "") {
    return {
      auth: true,
      token: user.accessToken,
    };
  } else {
    return {
      auth: false,
      token: null,
    };
  }
};

export default useLocalStorage;
