const defaultParams = { version: 5.74 };

function apiRequest(method, params) {
    const paramsToRequest = { ...defaultParams, ...params };
    return new Promise((resolve) => window.VK.api(method, paramsToRequest, (data) => resolve(data.response[0])));
}

export const getUser = (user_ids) => apiRequest('users.get', { user_ids, fields: 'photo_50' });
