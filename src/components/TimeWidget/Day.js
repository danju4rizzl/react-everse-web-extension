import React from 'react';
import PropTypes from 'prop-types';

export const Day = ({ day }) => {
  return (
    <div className="day">
      <p>{day()}</p>
    </div>
  );
};
Day.propTypes = {
  day: PropTypes.func,
};
