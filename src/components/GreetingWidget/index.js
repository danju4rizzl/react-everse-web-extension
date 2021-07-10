import React from 'react';
import moment from 'moment';
import { getGreetingTime } from '../../utils';

import './GreetingWidget.scss';

const TimeOfDay = ({ currentTimeOfDay }) => (
  <h2 className="text-capitalize mb-0">
    {getGreetingTime(currentTimeOfDay)}
    {/* TODO add user name from name entered by the user */}
    {` Deejay`}
  </h2>
);

const ScreenTime = ({ currentScreenTime }) => (
  <small className="screen-time">
    You’re current screen time is {currentScreenTime}
  </small>
);

function GreetingWidget() {
  /*
  TODO Continue working with moment.duration here https://momentjs.com/docs/#/durations/
  const screenTime = moment().fromNow('H');
  console.log(screenTime);
  */

  const currentHour = moment().format('H');

  return (
    <div className="greeting-widget">
      <TimeOfDay currentTimeOfDay={currentHour} />
      <ScreenTime currentScreenTime="3h 45min" />
    </div>
  );
}

export default GreetingWidget;