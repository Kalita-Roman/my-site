const session = {};

export function init({ mid, expire, sid, secret, sig }) {
    session.userId = mid;
    session.expire = expire;
    session.token = sid;
    session.secret = secret;
    session.sig = sig;
    return session;
}

export default session;
