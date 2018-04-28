import React, { PureComponent } from 'react';

export default class Trigger extends PureComponent {
    state = { pending: false };

    componentWillReceiveProps() {
        this.setState({ pending: false });
    }

    handleClick = () => {
        const { onClick, value } = this.props;
        if (!onClick) {
            return;
        }
        this.setState({ pending: true });
        onClick(!value);
    }

    render() {
        const { value } = this.props;
        const { pending } = this.state;
        const text = getStatus(value, pending);
        return (
            <button
                className="trigger"
                onClick={this.handleClick}
            >
                {text}
            </button>
        );
    }
}

function getStatus(value, pending) {
    if (pending) {
        return 'wait';
    }
    return value ? 'ON' : 'OFF';
}
