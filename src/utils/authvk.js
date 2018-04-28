const APIID = 5675624;

const vkSessionPromise = () => new Promise(Init);

function Init(resolve) {
    VK.init({ apiId: APIID });
    VK.Auth.getLoginStatus((response) => {
        if (response) {
            resolve(response);
        } else {
            VK.Auth.login((loginResponce) => {
                resolve(loginResponce);
            }, 7);
        }
    });
}

export default vkSessionPromise;
