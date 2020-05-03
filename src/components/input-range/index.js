import React, { useState, useContext } from 'react';
import { CountContext } from '~/context';
import useForm from '~/hooks/useForm';
import Button from '~/components/button';
import { minToSec, getDivisors } from '~/utils/time';

const InputRange = () => {
  const [active, setActive] = useState(-1);
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
          value={values.time}
          onChange={handleChange}
          style={{ width: '800px' }}
        />
      </label>

      <Button
        text="Get intervals"
        fn={() => {
          getTime(values.time);
          getMinutes(getDivisors(minToSec(values.time)));
        }}
      />

      <p>Possible divisors are:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 55px' }}>
        {minutes?.map((x, i) => (
          <Button
            type="button"
            id={x}
            key={x}
            text={x}
            active={active === i}
            fn={() => {
              getInterval(x);
              setActive(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InputRange;
