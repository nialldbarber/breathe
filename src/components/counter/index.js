import React, { useState, useEffect, useContext } from 'react';
import { CountContext } from '~/context';
import Button from '~/components/button';
import Message from '~/components/message';
import Bar from '~/components/bar';
import { secToMs, minToMs } from '~/utils/time';

const Counter = () => {
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
    time,
    interval,
  } = useContext(CountContext);

  const int = secToMs(interval);
  const minutes = minToMs(time);

  console.log('it is', minutes);

  useEffect(() => {
    const timer = setInterval(() => {
      if (begin) {
        if (count >= minutes) {
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
