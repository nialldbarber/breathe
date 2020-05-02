import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { store } from '~/store';
import reducer from '~/reducers/count';
import {
  INTERNAL_COUNT,
  RESET_INTERNAL_COUNT,
  SET_COUNT,
} from '~/constants/count';
import { SET_MESSAGE } from '~/constants/message';
import { BEGIN, PAUSE, RESET } from '~/constants/modes';

const CountContext = createContext(store);

const CountProvider = (props) => {
  const [
    { internalCount, count, message, begin, countdown },
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
      }}
      {...props}
    />
  );
};

export { CountContext, CountProvider };
