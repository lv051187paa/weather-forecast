import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeUnits } from '../actions/forecast/actionCreators';
import { clearLocation } from '../actions/browser/actionCreators';

const Settings = ({ units, toggleUnits, resetGeo }) => {
  return (
    <div className="settings">
      <div className="settings-block">
        <p className="settings-title">Units</p>
        <div className="settings-units">
          <div onClick={() => toggleUnits('c')} className={units === 'c' ? 'active' : ''}>c</div>
          <div onClick={() => toggleUnits('f')} className={units === 'f' ? 'active' : ''}>f</div>
        </div>
      </div>
      <div className="settings-block">
        <p className="settings-title">System settings</p>
        <button className="settings-reset" onClick={resetGeo}>Reset Cache</button>
      </div>
    </div>
  )
}

Settings.propTypes = {
  toggleUnits: PropTypes.func.isRequired,
  resetGeo: PropTypes.func.isRequired,
  units: PropTypes.string,
};

Settings.defaultProps = {
  units: 'c'
};

const mapStateToProps = state => ({
  units: state.forecast.units
})

const mapDispatchToProps = dispatch => ({
  toggleUnits: (units) => dispatch(changeUnits(units)),
  resetGeo: () => dispatch(clearLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
