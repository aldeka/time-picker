import React from 'react';
import TimeChoices from './TimeChoices';

import TimeType from '../types/Time';
import { formatTime } from './utils';
import { Picker, TimeInput } from './TimePicker.styles';
import useTimeStyle from '../hooks/useTimeStyle';
import ThemeContext from '../context/ThemeContext';

type Props = {
  time: TimeType;
  onSelect: (newTime: TimeType) => void;
}

function TimePicker({ time, onSelect }: Props) {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const [is24HourTime] = useTimeStyle();
  const [inputTime, setInputTime] = React.useState<string>(formatTime(time, is24HourTime));
  const theme = React.useContext(ThemeContext);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const dropdownRef = React.createRef<HTMLDivElement>();

  const handleSelect = (newTime: TimeType) => {
    setShowDropdown(false);
    setInputTime(formatTime(newTime, is24HourTime));
    onSelect(newTime);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO validate input
    // handleSelect(inputTime);
  };

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (dropdownRef.current
        && !dropdownRef.current.contains(e?.target as Node)
        && inputRef.current
        && !inputRef.current.contains(e?.target as Node)
      ) {
        setShowDropdown(false);
        // TODO validate input
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <Picker onSubmit={onSubmit}>
      <TimeInput
        ref={inputRef}
        value={inputTime}
        onChange={onChange}
        onFocus={() => setShowDropdown(true)}
        className={theme}
      />
      {
        showDropdown && (
          <TimeChoices
            ref={dropdownRef}
            time={time}
            onSelect={handleSelect}
          />
        )
      }
    </Picker>
  );
}

export default TimePicker;
