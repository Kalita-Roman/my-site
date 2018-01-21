import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Admin extends PureComponent {
  render() {
    return (<div>
      <div>
        <Link to="/">Back</Link>
        <Link to="/admin/users">users</Link>
        <Link to="/admin/games">games</Link>
      </div>
      <div className="admin-users">
        <div className="admin-users-add">
          Add
        </div>
        <div className="admin-users-add">
          users
        </div>
      </div>
    </div>
    );
  }
};