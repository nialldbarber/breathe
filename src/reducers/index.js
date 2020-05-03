import {
  INTERNAL_COUNT,
  RESET_INTERNAL_COUNT,
  SET_COUNT,
} from '~/constants/count';
import { SET_MESSAGE, SET_BREATHING_MESSAGE } from '~/constants/message';
import { BEGIN, PAUSE, RESET } from '~/constants/modes';
import { SET_TOTAL_TIME, SET_TIME, SET_INTERVAL } from '~/constants/input';
import { store } from '~/store';

const reducer = (draft, action) => {
  switch (action.type) {
    // Counter
    case INTERNAL_COUNT:
      draft.internalCount += 1;
      return;
    case RESET_INTERNAL_COUNT:
      draft.internalCount = 1;
      return;
    case SET_COUNT:
      draft.count += action.count;
      return;

    // Message
    case SET_MESSAGE:
      draft.message = action.message;
      return;
    case SET_BREATHING_MESSAGE:
      draft.breatheMessage = action.message;
      return;

    // Modes
    case BEGIN:
      draft.begin = true;
      draft.countdown = true;
      return;
    case PAUSE:
      draft.begin = false;
      draft.countdown = false;
      return;
    case RESET:
      return store;

    // Inputs
    case SET_TOTAL_TIME:
      draft.time = action.time;
      return;
    case SET_TIME:
      draft.minutes = action.minutes;
      return;
    case SET_INTERVAL:
      draft.interval = action.interval;
      return;

    // Default
    default:
      return draft;
  }
};

export default reducer;
