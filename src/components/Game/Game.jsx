import React, { PureComponent } from 'react';

export default class Content extends PureComponent {
    componentWillMount() {
        this.props.fetchCurrentGames();
    }

    render() {
        return (
            <div className="content">
                {'Content'}
            </div>
        );
    }
}
