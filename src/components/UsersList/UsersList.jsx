import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddUser from '../AddUser';
import UserCard from '../UserCard';

import {
    fetchUsers,
    updateUser,
    deleteUser,
} from '../../actions/users';

class UsersList extends Component {
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
        return (
            <div>
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

export default connect(mapStateToProps, mapActionsToProps)(UsersList);
