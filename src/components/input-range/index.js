import React, { useContext } from 'react';
import { CountContext } from '~/context';
import useForm from '~/hooks/useForm';
import { minToSec, getDivisors } from '~/utils/time';

const InputRange = () => {
  const {
    time, // single value
    minutes, // list of intervals
    interval,
    getMinutes,
    getInterval,
    getTime,
  } = useContext(CountContext);

  const { values, handleChange } = useForm({ time: '' });

  return (
    <div>
      <label htmlFor="time">
        Set Time: {values.time}
        <input
          type="range"
          id="time"
          name="time"
          min="0"
          max="60"
          value={values.time} // convert to 60?
          onChange={handleChange}
          style={{ width: '800px' }}
        />
      </label>

      <div style={{ border: '1px dashed red' }}>
        <p>Time is: {time}</p>
      </div>

      <button
        type="button"
        onClick={() => {
          getTime(values.time);
          getMinutes(getDivisors(minToSec(values.time)));
        }}
      >
        Get results
      </button>

      <p>Possible divisors are:</p>
      {minutes?.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
};

export default InputRange;
