import { api } from "../../api";
import {
  getAuthorizedUserFailed,
  getAuthorizedUserStarted,
  getAuthorizedUserSuccess,
  getUserFailed,
  getUserStarted,
  getUserSuccess,
  mutateUserFailed,
  mutateUserStarted,
  mutateUserSuccess,
} from "../actionCreators/users";

export const getUser = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserStarted());
      const response = await api.users.getUser(id);
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      dispatch(getUserFailed(error));
    }
  };
};

export const getAuthorizedUser = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(getAuthorizedUserStarted());
      const response = await api.users.getUser(1);
      dispatch(getAuthorizedUserSuccess(response.data));
    } catch (error) {
      dispatch(getAuthorizedUserFailed(error));
    }
  };
};

export const mutateUser = (data, userId) => {
  return async (dispatch, getState) => {
    dispatch(mutateUserStarted());
    const state = getState();
    const newUser = { ...state.users.user, ...data };

    try {
      const response = await api.users.mutateUser({
        data: newUser,
        url: `/${userId}`,
      });

      dispatch(getUserSuccess(response.data));
    } finally {
      dispatch(mutateUserSuccess());
    }
  };
};
