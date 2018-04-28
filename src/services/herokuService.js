import { requestJSON } from './requestsService';

export function getPermissions() {
    return requestJSON('/permissions');
}

export function getUsers() {
    return requestJSON('/users');
}

function buildUserUrl(user) {
    const id = user.uid || user.id;
    return '/users/' + id;
}

export function addUser(id) {
    return requestJSON('/users/' + id, {
        method: 'PUT',
    });
}

export function updateUser(user) {
    return requestJSON(buildUserUrl(user), {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify(user),
    });
}

export function deleteUser(user) {
    return requestJSON(buildUserUrl(user), {
        method: 'DELETE',
    });
}
