import { createAction } from 'redux-actions';
import {
    getUsers,
    updateUser as requestUpdateUser,
    addUser as requestAddUser,
    deleteUser as requestDeleteUser,
} from '../services/herokuService';
import { getUser } from '../services/vkService';

const setUsers = createAction('USERS.SET');
const setUser = createAction('USER.SET');
const setUserData = createAction('USER.SET.DATA');
const setUserVkData = createAction('USER.SET.VKDATA');
const setUserPending = createAction('USER.SET.PENDING');
const setCurrentUser = createAction('CURRENT_USER.SET');

const pendingIds = new Set();

export const fetchUsers = () => async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
    users.forEach(({ id }) => {
        getUser(id)
            .then((user) => dispatch(setUserVkData(user)));
    });
};

export const fetchUserById = (id) => async (dispatch, getState) => {
    const state = getState();
    const user = state.users.find(x => x.id === id);
    if (user) {
        return;
    }
    if (pendingIds.has(id)) {
        return;
    }
    pendingIds.add(id);
    try {
        const userResponse = await getUser(id);
        pendingIds.delete(id);
        dispatch(setUser(userResponse));
    } catch (e) {
        console.log(e);
    }
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

export const addUser = (userId) => async () => {
    return await requestAddUser(userId);
};

export const deleteUser = (userId) => async () => {
    return await requestDeleteUser(userId);
};
