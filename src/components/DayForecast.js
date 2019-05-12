import React from 'react'
import { connect } from 'react-redux';
import { formatDate, getDay } from '../utils';

const DayForecast = ({ forecast, units }) => {
  return (
    <div className="forecast-item">
      <div className="forecast-temprature">
        <p className="forecast-temprature-data">{forecast.high}&#176; {units}</p>
        <p className="forecast-temprature-weather">{forecast.text}</p>
      </div>
      <div className="forecast-date">
        <h5>{getDay(forecast.date)}</h5>
        <p>{formatDate(forecast.date)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  units: state.forecast.units,
})

export default connect(mapStateToProps)(DayForecast);
