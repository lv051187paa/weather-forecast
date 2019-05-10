import React from 'react';

const DayForecast = () => {
  return (
    <div className="forecast-item">
      <div className="forecast-temprature">
        <p className="forecast-temprature-data">10&#176; C</p>
        <p className="forecast-temprature-weather">Rainy</p>
      </div>
      <div className="forecast-date">
        <h5>Wednasday</h5>
        <p>11 May</p>
      </div>
    </div>
  );
};

export default DayForecast;
