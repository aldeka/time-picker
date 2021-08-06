import React from 'react';
import TimePicker from './TimePicker/TimePicker';
import TimeLabel from './TimePicker/TimeLabel';

import useTimeStyle from './hooks/useTimeStyle';
import { getTimeNextHour } from './TimePicker/utils';

import TimeType from './types/Time';
import { AppBody, AppWrapper } from './App.styles';
import ThemeContext from './context/ThemeContext';

function App() {
  const [time, setTime] = React.useState<TimeType>(getTimeNextHour());
  const [isDarkmode, setIsDarkmode] = React.useState(false);
  const [is24HourTime, setIs24HourTime] = useTimeStyle();

  return (
    <AppBody className={isDarkmode ? 'dark' : 'light'}>
      <AppWrapper>
        <h1>Pick a Time</h1>
        <label>
          <input
            type="checkbox"
            checked={is24HourTime}
            onChange={() => setIs24HourTime(!is24HourTime)}
          />
          24 hr time
        </label>
        <label>
          <input
            type="checkbox"
            checked={isDarkmode}
            onChange={() => setIsDarkmode(!isDarkmode)}
          />
          Dark mode
        </label>
        <ThemeContext.Provider value={isDarkmode ? 'dark' : 'light'}>
          <TimePicker time={time} onSelect={setTime} />
          <TimeLabel time={time} />
        </ThemeContext.Provider>
      </AppWrapper>
    </AppBody>
  );
}

export default App;
