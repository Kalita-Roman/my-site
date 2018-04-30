import React, { Component } from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';
import waitingConnect from '../waitingConnect';

import GamesList from '../GamesList';
import UsersList from '../UsersList';


class Admin extends Component {
    render() {
        const { match } = this.props;
        return (<div>
            <div className="menu">
                <Link className="menu-item" to="/">Back</Link>
                <Link className="menu-item" to="/admin/users">users</Link>
                <Link className="menu-item" to="/admin/games">games</Link>
            </div>
            <div className="admin-users">
                <div>
                    <Route path={`${match.url}/users`} component={UsersList} />
                    <Route path={`${match.url}/games`} component={GamesList} />
                </div>
            </div>
        </div>
        );
    }
}

const checkState = ({ initialize }) => {
    const { permissions, session } = initialize;
    return { allow: !!(permissions && session) };
};

export default waitingConnect(checkState)()(Admin);
