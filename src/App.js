import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Home, Settings, NotFound } from './layouts';
import Header from './components/Header';
import { getGeo } from "./actions";
import { connect } from "react-redux";

const history = createBrowserHistory();

const App = ({fetchGeo}) => {
  useEffect(() => {
    fetchGeo()
  }, [fetchGeo]);
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchGeo: () => dispatch(getGeo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
