import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions';
import DayForecast from '../components/DayForecast';
import Preloader from '../components/Preloader';


const Home = ({ geo, getForecast, forecast }) => {
  const { lat, lon } = geo;
  const {location, forecasts} = forecast;
  useEffect(() => {
    lat && lon && getForecast({
      lat,
      lon,
    });
  }, [lat, lon])

  return (
    <div className="forecast">
      <p>
        Weather at <span>{location && location.city}</span>
      </p>
      <div className="forecast-list-wrapper">
        <div className="forecast-list">
          {!location && <Preloader />}
          {forecasts && forecasts.length && forecasts.map(forecastItem => <DayForecast key={forecastItem.date} forecast={forecastItem} />)}
        </div>
      </div>
    </div>
  );

};

const mapStateToProps = state => ({
  geo: state.browserGeo,
  forecast: state.forecast,
})

const mapDispatchToProps = dispatch => ({
  getForecast: (position) => dispatch(fetchForecast(position))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
