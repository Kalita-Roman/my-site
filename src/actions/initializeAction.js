import vkSessionPromise from '../utils/authvk.js';
import { init, getPermissions } from '../services/heroku.js';



export const initialize = () => (dispath) => {
  vkSessionPromise
    .then(async session => {
      const { sid, user } = session.session;
      const sessionData = {
        userId: user.id,
        token: sid
      }
      dispath({
        type: 'INIT',
        payload: sessionData
      });
      init(sessionData);
      const permissions = await getPermissions()
      dispath({
        type: 'PERMISSIONS',
        payload: permissions
      })
    });
}