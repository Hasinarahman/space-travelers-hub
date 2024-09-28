import { combineReducers } from 'redux';
import missionsReducer from './missionsReducers';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

export default rootReducer;
