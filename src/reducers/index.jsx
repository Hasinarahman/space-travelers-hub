import { combineReducers } from 'redux';
import missionReducer from './missionsReducers';

const rootReducer = combineReducers({
  missions: missionReducer,
});

export default rootReducer;
