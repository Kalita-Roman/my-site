import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import AddUser from '../AddUser';

import waitingConnect from '../waitingConnect';
import {
    fetchUsers,
    updateUser,
    deleteUser,
} from '../../actions/users';

import UserCard from '../UserCard';

class Admin extends PureComponent {
    componentWillMount() {
        this.props.fetchUsers();
    }

    onSwitch = (value) => {
        this.props.updateUser(value);
    }

    onDelete = (...args) => {
        this.props.deleteUser(...args);
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
                                <UserCard
                                    user={user}
                                    onSwitch={this.onSwitch}
                                    onDelete={this.onDelete}
                                />
                            </li>
                        ))}
                    </ul>
                    }
                </div>
                {/* <p>
                    <ul>
                        <li>11671427</li>
                        <li>14969875</li>
                        <li>45819093</li>
                        <li>45819093</li>
                        <li className="w">13264174</li>
                    </ul>
                </p> */}
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
    deleteUser,
};

const checkState = ({ initialize }) => {
    const { permissions, session } = initialize;
    return { allow: !!(permissions && session) };
};

export default waitingConnect(checkState)(mapStateToProps, mapActionsToProps)(Admin);
