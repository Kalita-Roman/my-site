let userId = null;
let token = null;

export function init(sessionData) {
  userId = sessionData.userId;
  token = sessionData.token;
};

export function getPermissions() {
  return fetch('http://localhost:8080/permissions', {
    method: 'GET',
    headers: {
      'app-user-id' : userId,
      'app-access-token' : token
    }
  })
    .then(x => x.json());
}