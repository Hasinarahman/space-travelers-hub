const initialState = {
  missions: [
    {
      missionId: '1',
      missionName: 'Mission 1',
      description: 'Description 1',
      joined: false,
    },
  ],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MISSIONS':
      return {
        ...state,
        missions: action.payload,
      };
    case 'JOIN_MISSION':
      return {
        ...state,
        missions: state.missions.map((mission) => mission.missionId === action.payload
          ? { ...mission, joined: true }
          : mission),
      };
    case 'LEAVE_MISSION':
      return {
        ...state,
        missions: state.missions.map((mission) => mission.missionId === action.payload
          ? { ...mission, joined: false }
          : mission),
      };
    default:
      return state;
  }
};

export default missionReducer;
