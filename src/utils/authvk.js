const APIID = 5675624;

export default new Promise((resolve) => {
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
});
