import vkSessionPromise from '../utils/authvk.js';
import { createAction } from 'redux-actions';
import { init } from '../services/sessionService';
import { getPermissions, go } from '../services/herokuService';

const setSession = createAction('INIT');
const setPermissions = createAction('PERMISSIONS');

export const initialize = () => async (dispath) => {
    const session = await fetchSessionData();
    const sessionData = init(session);
    dispath(setSession(sessionData));
    const goResponce = await go();
    console.log(goResponce);
    const permissions = await getPermissions();
    dispath(setPermissions(permissions));
};

async function fetchSessionData() {
    const session = await vkSessionPromise;
    return session.session;
}
