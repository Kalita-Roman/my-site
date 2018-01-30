import { createAction } from 'redux-actions';
import { getUsers, updateUser as requestUpdateUser  } from '../services/herokuService';
import { getUser } from '../services/vkService';

const setUsers = createAction('USERS.SET');
const setCurrentUser = createAction('CURRENT_USER.SET');

export const fetchUsers = () => async (dispatch) => {
  const users = await getUsers();
  console.log(users);
  const fullUsers = await Promise.all(users.map(({ id }) => getUser(id)));
  dispatch(setUsers(fullUsers));
}

export const fetchCurrentUser = (id) => async (dispatch) => {
  const userResponse = await getUser(id);
  dispatch(setCurrentUser(userResponse));
}

export const updateUser = (...data) => async (dispatch) => {
  const user = await requestUpdateUser(...data);
  console.log(user);
}

