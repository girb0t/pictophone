import { PHRASE_INPUT_VALUE_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  phraseInputValue: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PHRASE_INPUT_VALUE_CHANGED:
    return { ...state, phraseInputValue: action.payload };
  default:
    return state;
  }
};
