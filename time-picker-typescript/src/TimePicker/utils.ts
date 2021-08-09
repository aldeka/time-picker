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
  } else if (hourString.length < 2) {
    hourString = `0${hourString}`;
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

export function getValidTime(timeString: string, is24HourTime: boolean, prevValue: TimeType): TimeType {
  const test = is24HourTime ? /^\d?\d:?\d\d$/ : /^(?:\d?\d:?\d\d(?:(?:am)?|(?:pm)?))$/g;
  const maxHours = is24HourTime ? 23 : 12;

  if (timeString.match(test)) {
    const lastTwoChars = timeString.slice(timeString.length - 2, timeString.length);
    let minute = lastTwoChars;
    let hour = timeString.split(':')[0].slice(0, 2);

    if (lastTwoChars === 'pm' || lastTwoChars === 'am') {
      // if the last two chars are taken up with am/pm we need to search further backwards for the minutes.
      minute = timeString.slice(timeString.length - 4, timeString.length - 2);
      hour = timeString.slice(0, timeString.length - 4).replace(/\D/g,''); // replace removes the colon if present
    }
    const minuteNum = parseInt(minute, 10);
    const hourNum = parseInt(hour, 10);
    if (Number.isNaN(minuteNum) || minuteNum > 60 || minuteNum < 0) {
      return prevValue;
    }

    if (Number.isNaN(hourNum) || hourNum > maxHours || hourNum < 0) {
      return prevValue;
    }
    return {
      hour: hourNum,
      minute: minuteNum,
    };
  }
  return prevValue;
}