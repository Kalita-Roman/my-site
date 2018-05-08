import { connect } from 'react-redux';
import './Game.scss';

import Game from './Game.jsx';

import {
    fetchCurrentGames,
    fetchGameById,
} from '../../actions/games';
import { selectedGame } from '../../selectors/games';

const fetchGame = () => async (dispatch, getStore) => {
    await fetchCurrentGames()(dispatch);
    const { id } = getStore().games.current[0];
    dispatch(fetchGameById(id));
};

const mapStateToProps = (store) => ({
    game: selectedGame(store),
});

const mapActionsToProps = {
    fetchGame,
};

export default connect(mapStateToProps, mapActionsToProps)(Game);
