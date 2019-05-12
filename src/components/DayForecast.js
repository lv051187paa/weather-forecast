import React from 'react';
import {formatDate} from '../utils';

const DayForecast = ({forecast}) => {
  return (
    <div className="forecast-item">
      <div className="forecast-temprature">
        <p className="forecast-temprature-data">{forecast.high}&#176; C</p>
        <p className="forecast-temprature-weather">{forecast.text}</p>
      </div>
      <div className="forecast-date">
        <h5>{forecast.day}</h5>
        <p>{formatDate(forecast.date)}</p>
      </div>
    </div>
  );
};

export default DayForecast;
