import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

class UserTitle extends PureComponent {
    render() {
        const { user, permissions } = this.props;
        const { id, first_name, last_name, photo } = user;
        const { isPermitted } = permissions;

        return (<div className="user-title">
            <div className="user-title-image">
                <img src={photo} alt={id} />
            </div>
            <div className="user-title-date">
                <div className="user-title-date__info">
                    <p>
                        {first_name}
                    </p>
                    <p>
                        {last_name}
                    </p>
                </div>
            </div>
            <div className={
                classNames('user-title-permition', { 'user-title-permition--active': isPermitted })}
            >
                {'Разрешение: ' + isPermitted}
            </div>
            <div>
                {permissions && permissions.isAdmin && <Link to="/admin">Admin</Link>}
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    permissions: state.initialize.permissions,
});

export default connect(mapStateToProps)(UserTitle);
