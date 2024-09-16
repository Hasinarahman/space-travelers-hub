import { JOIN_MISSION, LEAVE_MISSION, SET_MISSIONS } from './missionsActionTypes';

export const joinMission = (mission_id) => ({
  type: JOIN_MISSION,
  payload: mission_id,
});

export const leaveMission = (mission_id) => ({
  type: LEAVE_MISSION,
  payload: mission_id,
});

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});
