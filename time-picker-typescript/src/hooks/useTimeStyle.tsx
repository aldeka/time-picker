//import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import useLocalStorage from './useLocalStorage';

function useTimeStyle():[boolean, (setting: boolean) => void] {
  const [is24HourTime, setIs24HourTime] = useLocalStorage('is24HourTime', true);

  return [is24HourTime, setIs24HourTime];
}

export default useTimeStyle;