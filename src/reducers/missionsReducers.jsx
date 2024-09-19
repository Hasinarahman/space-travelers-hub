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
    case 'LEAVE_MISSION': {
      const joinedStatus = action.type === 'JOIN_MISSION';

      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.missionId === action.payload) {
            return { ...mission, joined: joinedStatus };
          }
          return mission;
        }),
      };
    }
    default:
      return state;
  }
};

export default missionReducer;
