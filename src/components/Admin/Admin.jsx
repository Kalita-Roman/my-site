import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import AddUser from '../AddUser';

import waitingConnect from '../waitingConnect';
import { fetchUsers, updateUser } from '../../actions/users';

import UserCard from '../UserCard';

class Admin extends PureComponent {
    componentWillMount() {
        this.props.fetchUsers();
    }

    onSwitch = (...args) => {
        this.props.updateUser(...args);
    }

    render() {
        const { users } = this.props;
        return (<div>
            <div>
                <Link to="/">Back</Link>
                <Link to="/admin/users">users</Link>
                <Link to="/admin/games">games</Link>
            </div>
            <div className="admin-users">
                <AddUser />
                <div className="admin-users-add">
                    {users && <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <UserCard user={user} onSwitch={this.onSwitch} />
                            </li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

const mapActionsToProps = {
    fetchUsers,
    updateUser,
};

const checkState = ({ initialize }) => {
    const { permissions, session } = initialize;
    return { allow: !!(permissions && session) };
};

export default waitingConnect(checkState)(mapStateToProps, mapActionsToProps)(Admin);
