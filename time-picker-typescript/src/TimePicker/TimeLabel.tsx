import React from 'react';
import TimeType from '../types/Time';
import { formatTime } from '../utils';
import { DisplayTime } from './TimePicker.styles';

type Props = {
  time: TimeType;
}

function TimeLabel({ time }: Props) {
  return (
    <DisplayTime>
      {formatTime(time)}
    </DisplayTime>
  );
}

export default TimeLabel;
