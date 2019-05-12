import React from 'react';

import { connect } from 'react-redux';
import { changeUnits, clearLocation } from '../actions';

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

const mapStateToProps = state => ({
  units: state.forecast.units
})

const mapDispatchToProps = dispatch => ({
  toggleUnits: (units) => dispatch(changeUnits(units)),
  resetGeo: () => dispatch(clearLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
