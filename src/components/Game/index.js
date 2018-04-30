import { connect } from 'react-redux';
import './Game.scss';

import Content from './Game.jsx';

import { fetchCurrentGames } from '../../actions/games';

const mapStateToProps = () => ({
    game: {
        name: 'МБ',
        days: [
            {
                day: 'Пн',
                players: ['1', '2'],
            },
            {
                day: 'Вт',
                players: ['1', '2', '3'],
            },
            {
                day: 'Ср',
                players: ['2', '3', '4', '5'],
            },
            {
                day: 'Чт',
                players: ['3', '4'],
            },
        ],
    },
});

const mapActionsToProps = {
    fetchCurrentGames,
};

export default connect(mapStateToProps, mapActionsToProps)(Content);
