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

export function request(url, oprions = {}) {
    const headers = oprions.headers || {};
    oprions.headers = { ...headers, ...authHeaders() };
    return fetch(SERVER_URL + url, oprions);
}

export function requestJSON(...args) {
    return request(...args)
        .then((x) => x.json())
        .catch((err) => ({ error: 'error', message: err }));
}

