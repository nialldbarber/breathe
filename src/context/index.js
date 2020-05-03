import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { store } from '~/store';
import reducer from '~/reducers';
import {
  INTERNAL_COUNT,
  RESET_INTERNAL_COUNT,
  SET_COUNT,
} from '~/constants/count';
import { SET_MESSAGE } from '~/constants/message';
import { BEGIN, PAUSE, RESET } from '~/constants/modes';
import { SET_TOTAL_TIME, SET_TIME, SET_INTERVAL } from '~/constants/input';

const CountContext = createContext(store);

const CountProvider = (props) => {
  const [
    {
      internalCount,
      count,
      message,
      begin,
      countdown,
      time,
      minutes,
      interval,
    },
    dispatch,
  ] = useImmerReducer(reducer, store);

  // Counter
  const incrementInternalCount = () => dispatch({ type: INTERNAL_COUNT });
  const resetInternalCount = () => dispatch({ type: RESET_INTERNAL_COUNT });
  const setCount = (c) => dispatch({ type: SET_COUNT, count: c });

  // Message
  const setMessage = (m) => dispatch({ type: SET_MESSAGE, message: m });

  // Modes
  const beginTimer = () => dispatch({ type: BEGIN });
  const pauseTimer = () => dispatch({ type: PAUSE });
  const resetTimer = () => dispatch({ type: RESET });

  // Input
  const getTime = (t) => dispatch({ type: SET_TOTAL_TIME, time: t });
  const getMinutes = (m) => dispatch({ type: SET_TIME, minutes: m });
  const getInterval = (i) => dispatch({ type: SET_INTERVAL, interval: i });

  return (
    <CountContext.Provider
      value={{
        internalCount,
        count,
        incrementInternalCount,
        resetInternalCount,
        setCount,
        message,
        setMessage,
        begin,
        countdown,
        beginTimer,
        pauseTimer,
        resetTimer,
        getMinutes,
        getInterval,
        getTime,
        time,
        minutes,
        interval,
      }}
      {...props}
    />
  );
};

export { CountContext, CountProvider };
