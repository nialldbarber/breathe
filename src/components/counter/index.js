import React, { useState, useEffect, useContext } from 'react';
import { CountContext } from '~/context/count';
import Button from '~/components/button';
import Message from '~/components/message';
import Bar from '~/components/bar';
import { secToMs, minToMs } from '~/utils/time';

const Counter = ({ interval, minutes }) => {
  const [btnCount, setBtnCount] = useState(0);
  const {
    count,
    incrementInternalCount,
    setCount,
    begin,
    beginTimer,
    pauseTimer,
    resetTimer,
    setMessage,
  } = useContext(CountContext);

  const int = secToMs(interval);
  const time = minToMs(minutes);

  useEffect(() => {
    const timer = setInterval(() => {
      if (begin) {
        if (count >= time) {
          setMessage('Done!');
          clearInterval(timer);
        } else {
          incrementInternalCount();
          setCount(int);
        }
      }
    }, int);

    return () => clearInterval(timer);
  }, [count, begin]);

  return (
    <>
      <Bar int={int} />
      <Message />
      {begin ? (
        <Button text="Pause" fn={pauseTimer} />
      ) : (
        <Button
          text={btnCount >= 1 ? 'Resume' : 'Begin'}
          fn={() => {
            beginTimer();
            setBtnCount(btnCount + 1);
          }}
        />
      )}

      <Button
        text="Reset"
        fn={() => {
          resetTimer();
          setBtnCount(0);
        }}
      />
    </>
  );
};

export default Counter;
