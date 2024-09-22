import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, setMissions } from '../actions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions?.missions || []);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        if (Array.isArray(data)) {
          const missionsWithJoined = data.map(mission => ({
            ...mission,
            joined: false,
          }));
          dispatch(setMissions(missionsWithJoined));
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Failed to fetch missions:', error);
      }
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
        {missions.length > 0 ? (
          missions.map((mission) => (
            <li key={mission.mission_id} className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold">{mission.mission_name}</h2>
              <p className="text-gray-600">{mission.description}</p>
              <div className="mt-2">
                {mission.joined ? (
                  <>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-green-500 rounded-full">Active Member</span>
                    <button
                      onClick={() => handleLeave(mission.mission_id)}
                      className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Leave Mission
                    </button>
                  </>
                ) : (
                  <>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-gray-500 rounded-full">Not a Member</span>
                    <button
                      onClick={() => handleJoin(mission.mission_id)}
                      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Join Mission
                    </button>
                  </>
                )}
              </div>
            </li>
          ))
        ) : (
          <p>No missions available</p>
        )}
      </ul>
    </div>
  );
};

export default Missions;
