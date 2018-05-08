const defaultParams = { version: 5.74 };

export const getUser = async (user_ids, props) => {
    const dafaultProps = { fields: 'photo_50,photo_100' };
    const user = await apiRequest('users.get', { user_ids, ...dafaultProps, ...props });
    user.photo = user.photo_100;
    return user;
};

function apiRequest(method, params) {
    const paramsToRequest = { ...defaultParams, ...params };
    return new Promise((resolve) => window.VK.api(method, paramsToRequest, (data) => resolve(data.response[0])));
}
