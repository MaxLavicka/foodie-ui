import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TestComponent from '../components/TestComponent';
import Home from '../components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asdasd: 1,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <button type="submit"><Link to="/">Home {this.state.asdasd}</Link></button>
            <button type="submit"><Link to="/test">Test Component</Link></button>
            <button onClick={() => this.props.testApi()}>Test API</button>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={TestComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
App.propTypes = {
  testApi: PropTypes.func.isRequired,
};

export default App;