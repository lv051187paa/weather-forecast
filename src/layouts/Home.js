import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGeo } from '../actions';
import DayForecast from '../components/DayForecast';

const Home = ({geo}) => {

  return (
    <div className="forecast">
      <p>
        Weather at <span>Kiev</span>
      </p>
      <div className="forecast-list-wrapper">
        <div className="forecast-list">
          <DayForecast/>
        </div>
      </div>
    </div>
  );

};

const mapStateToProps = state => ({
  geo: state.browserGeo
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
