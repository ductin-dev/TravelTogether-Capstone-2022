import { EUser, UserAction } from "../Actions/LoginAction";

type UserState = {
  user: any;
  error: string | undefined;
  userCurrent: any;
};

const initialState = {
  user: {} as any,
  error: undefined,
  userCurrent: {} as any,
  authToken: null,
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case EUser.ON_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case EUser.ON_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    case EUser.ON_GET_CURRENT_USER:
      return {
        ...state,
        userCurrent: action.payload,
      };
    case EUser.ON_UPDATE_CURRENT_USER:
      return {
        ...state,
        userCurrent: action.payload,
      };
    default:
      return state;
  }
};

export { UserReducer };
