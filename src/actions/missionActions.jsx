import { JOIN_MISSION, LEAVE_MISSION, SET_MISSIONS } from './missionsActionTypes';

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMission = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});
