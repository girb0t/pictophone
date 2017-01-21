import {
  PHRASE_INPUT_VALUE_CHANGED,
} from './types';

export const phraseInputValueChanged = (newPhrase) => {
  return {
    type: PHRASE_INPUT_VALUE_CHANGED,
    payload: newPhrase
  };
};
