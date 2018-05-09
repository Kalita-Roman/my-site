const defaultParams = { version: 5.74 };

export const getUser = async (user_ids, props) => {
    const dafaultProps = { fields: 'photo_50,photo_100' };
    const user = await apiRequest('users.get', { user_ids, ...dafaultProps, ...props });
    user.photo = user.photo_100;
    return user;
};

async function apiRequest(method, params) {
    const paramsToRequest = { ...defaultParams, ...params };
    const res = await vkApi(method, paramsToRequest);
    return res.response[0];
}

function vkApi(method, params) {
    return new Promise((resolve, reject) => {
        try {
            window.VK.api(method, params, resolve);
        } catch (error) {
            reject(error);
        }
    });
}
