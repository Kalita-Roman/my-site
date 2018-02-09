import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../../actions/users';

class AddUser extends PureComponent {
    state = {
        value: '',
    }

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    }

    onClick = () => {
        const { props, state } = this;
        props.addUser(state.value);
    }

    render() {
        return (
            <div>
                <input value={this.state.value} type="text" onChange={this.onChange} />
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

const mapActionsToProps = {
    addUser,
};

export default connect(null, mapActionsToProps)(AddUser);
