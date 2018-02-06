import sessionData from '../services/sessionService';

const SERVER_URL = IS_DEV
    ? 'http://localhost:8080'
    : 'https://unionapp.herokuapp.com';

function authHeaders() {
    return {
        'app-user-id': sessionData.userId,
        'app-access-token': sessionData.token,
        'app-access-expire': sessionData.expire,
        'app-access-secret': sessionData.secret,
        'app-access-sig': sessionData.sig,
    };
}

function request(url, oprions = {}) {
    const headers = oprions.headers || {};
    oprions.headers = { ...headers, ...authHeaders() };
    return fetch(url, oprions);
}

function requestJSON(...args) {
    return request(...args)
        .then((x) => x.json())
        .catch((err) => ({ error: 'error', message: err }));
}


export function go() {
    console.log('go()');
    return requestJSON(SERVER_URL + '/go');
}

export function getPermissions() {
    return requestJSON(SERVER_URL + '/permissions');
}

export function getUsers() {
    return requestJSON(SERVER_URL + '/users');
}

function buildUserUrl(user) {
    const id = user.uid || user.id;
    return SERVER_URL + '/user/' + id;
}

export function addUser(user) {
    return requestJSON(buildUserUrl(user));
}

export function updateUser(user) {
    const body = {
        action: 'changeActive',
        data: !user.data.active,
    };
    return requestJSON(buildUserUrl(user), {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
    });
}

export function deleteUser(user) {
    return requestJSON(buildUserUrl(user));
}
