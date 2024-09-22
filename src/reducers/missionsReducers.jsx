const initialState = {
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MISSIONS':
      return {
        ...state,
        missions: action.payload,
      };
    case 'JOIN_MISSION':
      return {
        ...state,
        missions: state.missions.map(mission =>
          mission.mission_id === action.payload
            ? { ...mission, joined: true }
            : mission
        ),
      };
    case 'LEAVE_MISSION':
      return {
        ...state,
        missions: state.missions.map(mission =>
          mission.mission_id === action.payload
            ? { ...mission, joined: false }
            : mission
        ),
      };
    default:
      return state;
  }
};

export default missionsReducer;
