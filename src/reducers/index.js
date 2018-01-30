import { combineReducers } from 'redux';
import initialize from './initializeReducer.js';
import users from './usersReducer.js';
import currentUser from './currentUserReducer.js';

export default combineReducers({
  initialize,
  currentUser,
  users,
});
