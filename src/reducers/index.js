import { combineReducers } from 'redux';
import initialize from './initializeReducer.js';
import users from './usersReducer.js';
import currentUser from './currentUserReducer.js';
import games from './gamesReduser.js';

export default combineReducers({
    initialize,
    currentUser,
    users,
    games,
});
