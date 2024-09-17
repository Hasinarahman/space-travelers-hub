import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';

export default configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
