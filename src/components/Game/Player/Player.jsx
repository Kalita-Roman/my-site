import React, { PureComponent } from 'react';

export default class Player extends PureComponent {
    componentWillMount() {
        const { vote: { player }, fetchUserById } = this.props;
        fetchUserById(player);
    }

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        const { vkData } = user;
        const { photo_50 } = vkData;
        return (
            <div className="game-player">
                <img src={photo_50} alt="" />
            </div>
        );
    }
}
