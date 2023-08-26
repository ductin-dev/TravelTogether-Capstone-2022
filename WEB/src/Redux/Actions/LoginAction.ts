import { Dispatch } from "react";

export enum EUser {
  ON_LOGIN = "USER@:ON_LOGIN",
  ON_LOGOUT = "USER@:ON_LOGOUT",
  ON_GET_CURRENT_USER = "USER@:ON_GET_CURRENT_USER",
  ON_UPDATE_CURRENT_USER = "USER@:ON_UPDATE_CURRENT_USER",
}

export interface LoginAction {
  readonly type: EUser.ON_LOGIN;
  payload: any;
}
export interface LogoutAction {
  readonly type: EUser.ON_LOGOUT;
  payload: any;
}
export interface GetCurrentUserAction {
  type: EUser.ON_GET_CURRENT_USER;
  payload: any;
}

export interface UpdateCurrentUser {
  readonly type: EUser.ON_UPDATE_CURRENT_USER;
  payload: any;
}

export type UserAction =
  | LoginAction
  | LogoutAction
  | GetCurrentUserAction
  | UpdateCurrentUser;

// we need to dispatch action
export const onLogin = (data: any, data2: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const accessToken = data.accessToken;
    localStorage.setItem("token", accessToken);
    // update data current user
    dispatch({
      type: EUser.ON_GET_CURRENT_USER,
      payload: data2,
    });
  };
};
