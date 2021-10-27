import {
  SET_USER
} from '../actions/userAction.js';

const data = {
  user: {
    name: '',
    email: '',
  },
};

const userReducer = (state = data, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
