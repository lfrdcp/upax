export const SET_USER = 'SET_USER';

export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload: payload,
  };
};