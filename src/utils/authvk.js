const APIID = 5675624;

export default new Promise((resolve, reject) => {
  VK.init({ apiId: APIID });
  VK.Auth.login(e => { 
    resolve(e);
  }, 7);
});