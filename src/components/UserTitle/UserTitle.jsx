import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../services/vkService';
import classNames from 'classnames';

class UserImage extends PureComponent {
  render() {
    const { user, permissions } = this.props;
    const { id, first_name, last_name, photo_50 } = user;
    const { isPermitted } = permissions;

    return (<div className="user-title">
      <div className="">
        <img src={photo_50} alt={id} />
      </div>
      <div>
        <div className="">
          <div>
            {id}
          </div>
          <div>
            {first_name}
          </div>
          <div>
            {last_name}
          </div>
        </div>
      </div>
      <div className={
        classNames('user-title-permition', { 'user-title-permition--active': isPermitted  } )}>
        {'Разрешение: ' + isPermitted}
      </div>
    </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    permissions: state.initialize.permissions
  }
}

export default connect(mapStateToProps)(UserImage);

