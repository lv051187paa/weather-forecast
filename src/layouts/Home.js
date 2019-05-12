import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchForecast, changeUnits } from '../actions/forecast/actionCreators';
import DayForecast from '../components/DayForecast';
import Preloader from '../components/Preloader';


const Home = ({ geo, getForecast, forecast, units, isFetching }) => {
  const { lat, lon } = geo;
  const {location, forecasts} = forecast;
  useEffect(() => {
    isFetching && lat && lon && getForecast({
      lat,
      lon,
      u: units
    });
  }, [getForecast, lat, lon, units, isFetching])

  return (
    <div className="forecast">

      <p>
        Weather at <span>{location && location.city}</span>
      </p>
      {isFetching && <Preloader />}
      <div className="forecast-list-wrapper">
        <div className="forecast-list">
          {!isFetching && forecasts && forecasts.length && forecasts.map(forecastItem => <DayForecast key={forecastItem.date} forecast={forecastItem} />)}
        </div>
      </div>
    </div>
  );

};

Home.propTypes = {
  getForecast: PropTypes.func.isRequired,
  geo: PropTypes.object,
  forecast: PropTypes.object,
  units: PropTypes.string,
  isFetching: PropTypes.bool
};

Home.defaultProps = {
  geo: {},
  forecast: {},
  units: 'c',
  isFetching: true
};

const mapStateToProps = state => ({
  geo: state.browserGeo,
  forecast: state.forecast,
  units: state.forecast.units,
  isFetching: state.forecast.fetching || state.browserGeo.fetching,
})

const mapDispatchToProps = dispatch => ({
  getForecast: (position) => dispatch(fetchForecast(position)),
  toggleUnits: (units) => dispatch(changeUnits(units))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
