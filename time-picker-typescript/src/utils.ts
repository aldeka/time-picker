import TimeType from "./types/Time";

export function formatTime(time: TimeType) {
  let minuteString = time.minute.toString();
  if (minuteString.length < 2) {
    minuteString = `0${minuteString}`;
  }
  return `${time.hour.toString()}:${minuteString}`;
};

export function getTimeNextHour(): TimeType {
  const now = new Date();
  return {
    hour: (now.getHours() + 1) % 24,
    minute: 0,
  };
};