import React, { PureComponent } from 'react';
import waitingConnect from '../waitingConnect';
import { fetchCurrentUser } from '../../actions/users';
import UserTitle from '../UserTitle';
import Game from '../Game';

class Main extends PureComponent {
    componentWillMount() {
        const { session, fetchCurrentUser } = this.props;
        fetchCurrentUser(session.userId);
    }

    render() {
        return (
            <div className="main">
                <div className="right-board">
                    <UserTitle />
                </div>
                <div className="content">
                    <Game />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    session: state.initialize.session,
});

const mapActionsToProps = {
    fetchCurrentUser,
};

const checkState = ({ initialize }) => {
    const { permissions, session } = initialize;
    return { allow: !!(permissions && session) };
};

export default waitingConnect(checkState)(mapStateToProps, mapActionsToProps)(Main);
