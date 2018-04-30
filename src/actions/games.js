import { createAction } from 'redux-actions';
import {
    getGames,
    getCurrentGames,
} from '../services/herokuService';

const setGames = createAction('GAMES.SET');

export const fetchGames = () => async (dispatch) => {
    const games = await getGames();
    dispatch(setGames(games));
};

export const fetchCurrentGames = () => async (dispatch) => {
    const games = await getCurrentGames();
    dispatch(setGames(games));
};
