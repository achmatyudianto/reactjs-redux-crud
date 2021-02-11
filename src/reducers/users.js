import { GET_USERS_LIST, GET_USER_DETAIL } from "../actions/UserAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUserDetail: false,
  errorUserDetail: false,
  title: "Mbiodo Academy",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };
      case GET_USER_DETAIL:
        return {
          ...state,
          getUserDetail: action.payload.data,
          errorUserDetail: action.payload.errorMessage,
        };

    default:
      return state;
  }
};

export default users;
