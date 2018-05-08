import React, { PureComponent } from 'react';

import Player from './Player';

export default class GameDay extends PureComponent {
    render() {
        const { day } = this.props;
        const { players, date } = day;
        return (
            <div className="game-day">
                <div>
                    {date}
                </div>
                <div>
                    button
                </div>
                <div>
                    {
                        players.map((id) => <Player key={id} id={id} />)
                    }
                </div>
            </div>
        );
    }
}
