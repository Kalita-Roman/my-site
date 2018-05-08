import React, { PureComponent } from 'react';

import GameDay from './GameDay.jsx';

export default class Game extends PureComponent {
    componentWillMount() {
        this.props.fetchGame();
    }

    render() {
        const { game } = this.props;
        if (!game) {
            return null;
        }
        const { name, days } = game;
        return (
            <div className="game">
                <div className="game-header">
                    {name}
                </div>
                <div className="game-days">
                    {
                        days.map((day) => (<GameDay key={day.id} day={day} />))
                    }
                </div>
            </div>
        );
    }
}
