import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Home, Settings, NotFound } from './layouts';
import Header from './components/Header';
import { getGeo } from "./actions";
import { connect } from "react-redux";
import ErrorComponent from './components/ErrorComponent';

const history = createBrowserHistory();

const App = ({ fetchGeo, geo, geoError, forecastError }) => {
  const { lat, lon } = geo;
  useEffect(() => {

    !lat && !lon && fetchGeo()
  }, [
    fetchGeo,
    lat,
    lon,
  ]);

  const RootComponent = () => (
    <Switch>
      <Route path="/" exact component={() => forecastError ? <ErrorComponent message={forecastError}/> : <Home />}/>
      <Route path="/settings" component={Settings}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  )

  return (
    <>

      <Router history={history}>
        <Header/>
        {geoError ? <ErrorComponent message={geoError}/> : <RootComponent />}

      </Router>
    </>
  );
};

const mapStateToProps = state => ({
  geo: state.browserGeo,
  isForecastFetching: state.forecast.fetching,
  geoError: state.browserGeo.error,
  forecastError: state.browserGeo.error
})

const mapDispatchToProps = dispatch => ({
  fetchGeo: () => dispatch(getGeo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
