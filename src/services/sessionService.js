const session = {};

export function init({ userId, token }) {
  session.userId = userId;
  session.token = token;
};

export default session;
