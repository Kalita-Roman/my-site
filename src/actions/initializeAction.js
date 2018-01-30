import vkSessionPromise from '../utils/authvk.js';
import { createAction } from 'redux-actions';
import { init } from '../services/sessionService';
import { getPermissions } from '../services/herokuService';

const setSession = createAction('INIT');
const setPermissions = createAction('PERMISSIONS');

export const initialize = () => async (dispath) => {
  const sessionData = await fetchSessionData();
  dispath(setSession(sessionData));
  init(sessionData);
  const permissions = await getPermissions();
  dispath(setPermissions(permissions));
}

async function fetchSessionData () {
  const session = await vkSessionPromise;
  const { sid, user } = session.session;
  return {
    userId: user.id,
    token: sid
  };
}