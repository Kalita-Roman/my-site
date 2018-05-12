import React from 'react';

export default function TriggerOne({ value, pending }) {
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

TriggerOne.defaultProps = {
    value: false,
    pending: false,
};

function getStatus(value, pending) {
    if (pending) {
        return 'wait';
    }
    return value ? 'ON' : 'OFF';
}
