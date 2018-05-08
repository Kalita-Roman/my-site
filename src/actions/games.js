import { createAction } from 'redux-actions';
import {
    getGames,
    getCurrentGames,
    getGame,
} from '../services/herokuService';

const setGames = createAction('GAMES.SET');
const setCurrentGames = createAction('CURRENT_GAMES.SET');
const setGame = createAction('GAME.SET');

export const fetchGames = () => async (dispatch) => {
    const games = await getGames();
    dispatch(setGames(games));
};

export const fetchCurrentGames = () => async (dispatch) => {
    const games = await getCurrentGames();
    dispatch(setCurrentGames(games));
};

export const fetchGameById = (id) => async (dispatch) => {
    const games = await getGame(id);
    dispatch(setGame(games));
};
