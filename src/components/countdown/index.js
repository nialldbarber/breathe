import React, { useState, useEffect, useContext } from 'react';
import { CountContext } from '~/context';

const Countdown = () => {
  const [message, setMessage] = useState('');
  const { begin, interval } = useContext(CountContext);
  let int = interval - 2;

  useEffect(() => {
    const countdown = setInterval(() => {
      if (int <= 0) {
        clearInterval(countdown);
        setMessage('Breathe');
      } else {
        setMessage(`${int} seconds remaining`);
      }
      int -= 1;
    }, 1000);

    return () => clearInterval(countdown);
  }, [begin]);

  return (
    <div>
      <h1>Countdown!</h1>
      <p>Message: {message}</p>
    </div>
  );
};

export default Countdown;
