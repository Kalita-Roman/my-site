const APIID = 5675624;

export default new Promise((resolve, reject) => {
    VK.init({ apiId: APIID });
    VK.Auth.login((e) => {
        // const { session } = e;
        // console.log(session);
        // const expire = session.expire;
        // const mid = session.mid;
        // const secret = session.secret;
        // const sid = session.sid;

        // const str = 'expire=' + expire + 'mid=' + mid + 'secret=' + secret + 'sid=' + sid +  'q1nwAW4hN5yY8vCQ7Nbw';
        // console.log(str);
        // const value = VK.MD5(str);
        // console.log(value === session.sig, value, session.sig);

        resolve(e);
    }, 7);
});
