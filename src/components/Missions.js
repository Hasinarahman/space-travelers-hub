import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, setMissions } from '../actions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    const fetchMissions = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      const missionsWithJoined = data.map((mission) => ({
        ...mission,
        joined: false,
      }));
      dispatch(setMissions(missionsWithJoined));
    };
    fetchMissions();
  }, [dispatch]);

  const handleJoin = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeave = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Missions</h1>
      <ul className="space-y-4">
        {missions.map((mission) => (
          <li key={mission.missionId} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">{mission.missionName}</h2>
            <p className="text-gray-600">{mission.description}</p>
            <div className="mt-2">
              {mission.joined ? (
                <>
                  <span className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Active Member</span>
                  <button
                    type="button"
                    onClick={() => handleLeave(mission.missionId)}
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Leave Mission
                  </button>
                </>
              ) : (
                <>
                  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Not a Member</span>
                  <button
                    type="button"
                    onClick={() => handleJoin(mission.missionId)}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Join Mission
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
