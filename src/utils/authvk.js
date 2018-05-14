const APIID = 5675624;

const vkSessionPromise = () => new Promise(init);

async function init(resolve) {
    VK.init({ apiId: APIID });
    const { session } = await getLoginStatusVk();
    if (session) {
        resolve(session);
    } else {
        VK.Widgets.Auth('vk_auth', { authUrl: '/' });
    }
}

function getLoginStatusVk() {
    return new Promise(VK.Auth.getLoginStatus);
}

export default vkSessionPromise;
