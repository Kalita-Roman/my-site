import { requestJSON } from './requestsService';

export function getPermissions() {
    return requestJSON('/permissions');
}

export function getUsers() {
    return requestJSON('/users');
}

function buildUserUrl(user) {
    const id = user.uid || user.id;
    return '/user/' + id;
}

export function addUser(id) {
    return requestJSON('/user/' + id, {
        method: 'PUT',
    });
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
    return requestJSON(buildUserUrl(user), {
        method: 'DELETE',
    });
}
