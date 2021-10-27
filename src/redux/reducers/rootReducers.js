import { combineReducers } from 'redux';
import userReducer from './userReducer';
import employeeReducer from './employeeReducer'
const rootReducers = combineReducers({
  userReducer,
  employeeReducer
});

export default rootReducers;
