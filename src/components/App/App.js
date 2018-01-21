import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Admin from '../Admin';
import { initialize } from '../../actions/initializeAction.js';

import './App.scss';

class App extends PureComponent {
  componentWillMount() {
    this.props.initialize();
  }

  render() {

    return (
      <div className="app">
        <Router>
          <div>
            <div>
              <Link to="/admin">Admin</Link>
            </div>
            <div>
              
              <Route path="/admin" component={() => (<Admin />)} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = () => {

}

const mapActionsToProps = {
  initialize
}

export default connect(null, mapActionsToProps)(App);