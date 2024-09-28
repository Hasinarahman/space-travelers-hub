export const joinMission = (missionId) => ({
  type: 'JOIN_MISSION',
  payload: missionId,
});

export const leaveMission = (missionId) => ({
  type: 'LEAVE_MISSION',
  payload: missionId,
});

export const setMissions = (missions) => ({
  type: 'SET_MISSIONS',
  payload: missions,
});
