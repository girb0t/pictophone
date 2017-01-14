import { combineReducers } from 'redux';

specificReducer = (state = { yolo: '' }, action) => {
  return state;
};

export default combineReducers({
  yolo: specificReducer
});
