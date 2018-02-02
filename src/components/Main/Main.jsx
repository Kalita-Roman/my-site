import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../services/vkService';
import waitingConnect from '../waitingConnect';
import { fetchCurrentUser } from '../../actions/users';
import UserTitle from '../UserTitle';

class Main extends PureComponent {
    componentWillMount() {
        const { session, fetchCurrentUser } = this.props;
        this.props.fetchCurrentUser(session.userId);
    }

    render() {
        return (
            <div className="main">
                <UserTitle />
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
}

export default waitingConnect(checkState)(mapStateToProps, mapActionsToProps)(Main);
