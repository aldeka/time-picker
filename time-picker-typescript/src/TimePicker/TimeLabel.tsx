import React from 'react';
import TimeType from '../types/Time';
import { formatTime } from './utils';
import { DisplayTime } from './TimePicker.styles';
import useTimeStyle from '../hooks/useTimeStyle';
import ThemeContext from '../context/ThemeContext';

type Props = {
  time: TimeType;
}

function TimeLabel({ time }: Props) {
  const [is24HourTime] = useTimeStyle();
  const theme = React.useContext(ThemeContext);

  return (
    <DisplayTime className={theme}>
      {formatTime(time, is24HourTime)}
    </DisplayTime>
  );
}

export default TimeLabel;
