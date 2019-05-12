import React from 'react';
import PropTypes from "prop-types";

const ErrorComponent = ({message}) => (
  <div className="error-block">
    <p>{message}</p>
  </div>
)

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
