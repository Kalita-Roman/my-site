import { createAction } from 'redux-actions';
import {
    getUsers,
    updateUser as requestUpdateUser,
} from '../services/herokuService';
import { getUser } from '../services/vkService';

const setUsers = createAction('USERS.SET');
const setUserData = createAction('USER.SET.DATA');
const setUserVkData = createAction('USER.SET.VKDATA');
const setUserPending = createAction('USER.SET.PENDING');
const setCurrentUser = createAction('CURRENT_USER.SET');

export const fetchUsers = () => async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
    users.forEach(({ id }) => {
        getUser(id)
            .then((user) => dispatch(setUserVkData(user)));
    });
};

export const fetchCurrentUser = (id) => async (dispatch) => {
    const userResponse = await getUser(id);
    dispatch(setCurrentUser(userResponse));
};

export const updateUser = (data) => async (dispatch) => {
    dispatch(setUserPending(data));
    const user = await requestUpdateUser(data);
    dispatch(setUserData(user));
};

