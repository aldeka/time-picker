import React from 'react';

import TimeType from '../types/Time';
import { formatTime } from '../utils';
import { TimeList } from './TimePicker.styles';

type Props = {
  time: TimeType;
  onSelect: (newTime: TimeType) => void;
};

const TimeChoices = React.forwardRef(
  ({ time, onSelect }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const closestChoiceRef = React.useRef<null | HTMLLabelElement>(null);

    const onChoiceSelection = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const hourQuarter = parseInt(e.target.value, 10);
      onSelect({
        hour: Math.floor(hourQuarter / 4),
        minute: (hourQuarter % 4) * 15,
      });
    }, [onSelect]);

    React.useEffect(() => {
      if (closestChoiceRef.current) {
        closestChoiceRef.current.scrollIntoView();
      }
    }, [time]);

    const closestChoice = time.hour * 4;
    const choices = React.useMemo(() => {
      const choiceCount = 24 * 4;
      const choices = [];
      for (let hourQuarter = 0; hourQuarter < choiceCount; hourQuarter++) {
        const choiceTime = formatTime({
          hour: Math.floor(hourQuarter / 4),
          minute: (hourQuarter % 4) * 15,
        });
        choices.push((
          <label
            key={`choice-${hourQuarter.toString()}`}
            htmlFor={`choice-${hourQuarter.toString()}`}
            ref={hourQuarter === closestChoice ? closestChoiceRef : null}
          >
            <input
              type="radio"
              id={`choice-${hourQuarter.toString()}`}
              name="choice-time"
              value={hourQuarter}
              onChange={onChoiceSelection}
            />
            {choiceTime}
          </label>
        ));
      }
      return choices;
    }, [onChoiceSelection, closestChoice]);

    return (
      <TimeList ref={ref}>
        {choices}
      </TimeList>
    );
  }
);

export default TimeChoices;