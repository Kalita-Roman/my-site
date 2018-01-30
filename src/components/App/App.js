import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Admin from '../Admin';
import Main from '../Main';
import { initialize } from '../../actions/initializeAction.js';

import './App.scss';

class App extends PureComponent {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    const { permissions } = this.props;
    return (
      <div className="app">
        <Router>
          <div>
            <div>
              {permissions && permissions.isAdmin && <Link to="/admin">Admin</Link>}
            </div>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/admin" component={Admin} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    permissions: state.initialize.permissions
  }
}

const mapActionsToProps = {
  initialize
}

export default connect(mapStateToProps, mapActionsToProps)(App);