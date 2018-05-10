import React, { PureComponent } from 'react';

import Player from './Player';
import Trigger from '../Trigger';

import {
    addVote,
    removeVote,
} from '../../services/herokuService';

export default class GameDay extends PureComponent {
    handleHangeClick = (value) => {
        const { day: { id: day, game, voteOfUser } } = this.props;
        if (value) {
            addVote({ day, game });
        }
        if (voteOfUser) {
            removeVote(voteOfUser.id);
        }
    }

    render() {
        const { day } = this.props;
        const { votes, voteOfUser, date } = day;

        return (
            <div className="game-day">
                <div>
                    {date}
                </div>
                <div>
                    <Trigger onClick={this.handleHangeClick} value={voteOfUser} />
                </div>
                <div>
                    {
                        votes.map((vote) => <Player key={vote.id} vote={vote} />)
                    }
                </div>
            </div>
        );
    }
}
