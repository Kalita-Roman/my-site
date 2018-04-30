import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchGames,
} from '../../actions/games';

class GamesList extends Component {
    componentWillMount() {
       this.props.fetchGames();
    }

    render() {
        return (
            <div>GamesList</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

const mapActionsToProps = {
    fetchGames,
};

export default connect(mapStateToProps, mapActionsToProps)(GamesList);
