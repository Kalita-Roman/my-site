import sessionData from '../services/sessionService';

const SERVER_URL = 'http://localhost:8080';

function authHeaders() {
  return {
    'app-user-id': sessionData.userId,
    'app-access-token': sessionData.token
  }
};

function request(url, oprions = {}, ...rest) {
  const headers = oprions.headers || {};
  oprions.headers = { ...headers, ...authHeaders() };
  return fetch(url, oprions)
    .then(x => x.json());
}

export function getPermissions() {
  return request(SERVER_URL + '/permissions');
}

export function getUsers() {
  return request(SERVER_URL + '/users');
}

function buildUserUrl(user) {
  const id = user.uid || user.id
  return SERVER_URL + '/user/' + id;
}

export function addUser(user) {
  return request(buildUserUrl(user));
}

export function updateUser(user) {
  const body = { 
    isActive: !user.isActive,
  };
  return request(buildUserUrl(user), { 
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=utf-8' },
    body:  JSON.stringify(body) 
  });
}

export function deleteUser(user) {
  return request(buildUserUrl(user));
}