import TimeType from "../types/Time";

export function formatTime(time: TimeType, is24HourTime: boolean) {
  let minuteString = time.minute.toString();
  if (minuteString.length < 2) {
    minuteString = `0${minuteString}`;
  }
  let hourString = time.hour.toString();
  if (!is24HourTime) {
    if (time.hour === 0 || time.hour === 12) {
      hourString = '12';
    } else {
      hourString = (time.hour % 12).toString();
    }
  }
  return `${hourString}:${minuteString}${is24HourTime ? '' : 'pm'}`;
};

export function getTimeNextHour(): TimeType {
  const now = new Date();
  return {
    hour: (now.getHours() + 1) % 24,
    minute: 0,
  };
};