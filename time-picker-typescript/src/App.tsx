import React from 'react';
import TimePicker from './TimePicker/TimePicker';
import TimeLabel from './TimePicker/TimeLabel';

import { getTimeNextHour } from './utils';

import TimeType from './types/Time';
import { AppWrapper } from './App.styles';

function App() {
  const [time, setTime] = React.useState<TimeType>(getTimeNextHour());

  return (
    <AppWrapper>
      <h1>Pick a Time</h1>
      <TimePicker time={time} onSelect={setTime} />
      <TimeLabel time={time} />
    </AppWrapper>
  );
}

export default App;
