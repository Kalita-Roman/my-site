import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

export default class UserCard extends PureComponent {

  onSwitch = () => {
    const { onSwitch, user } = this.props;
    onSwitch(user);
  }

  render() {
    const { user } = this.props;
    const { uid, first_name, last_name, photo_50, isActive } = user;

    const buttonClassName = classNames(
      'user-card-controls-button', {
        'active': isActive
      }
    );

    return (
      <div className="user-card">
        <div className="user-card-photo">
          <img src={photo_50} alt={uid} />
        </div>
        <div>
          <div className="user-card-name-block">
            <div>
              {uid}
            </div>
            <div>
              {first_name}
            </div>
            <div>
              {last_name}
            </div>
          </div>
        </div>
        <div className="user-card-controls">
          <button 
            className={buttonClassName}
            onClick={this.onSwitch}
          >
            switch
          </button>
        </div>
      </div>
    );
  }
};
