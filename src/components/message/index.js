import React, { useEffect, useContext } from 'react';
import { CountContext } from '~/context/count';
import { msToSec } from '~/utils/time';

const Message = () => {
  const {
    count,
    internalCount: i,
    message,
    resetInternalCount,
    setMessage,
  } = useContext(CountContext);

  useEffect(() => {
    if (i > 3) resetInternalCount();
    if (i === 1) setMessage('Inhale');
    if (i === 2) setMessage('Hold');
    if (i === 3) setMessage('Exhale');
  }, [i]);

  return (
    <>
      <h1>Counter!</h1>
      <p>Count: {i}</p>
      <p>Seconds: {count === null ? '' : `${msToSec(count)}s`}</p>

      <p>{message}</p>
    </>
  );
};

export default Message;
