import React from 'react';

import DayForecast from '../components/DayForecast';

const Home = () => {
  return (
    <div className="forecast">
      <p>
        Weather at <span>Kiev</span>
      </p>
      <div className="forecast-list">
        <DayForecast />
        <DayForecast />
        <DayForecast />

      </div>
    </div>
  );
};

export default Home;
