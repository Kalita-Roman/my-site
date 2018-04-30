import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Admin from '../Admin';
import Main from '../Main';
import { initialize } from '../../actions/initializeAction.js';

import './App.scss';

class App extends Component {
    componentWillMount() {
        this.props.initialize();
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <div style={{ height: '100%' }}>
                        <Route exact path="/" component={Main} />
                        <Route path="/admin/" component={Admin} />
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    permissions: state.initialize.permissions,
});

const mapActionsToProps = {
    initialize,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
