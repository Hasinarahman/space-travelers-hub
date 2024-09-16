import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    const fetchMissions = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      const missionsWithJoined = data.map(mission => ({
        ...mission,
        joined: false,
      }));
      dispatch(setMissions(missionsWithJoined));
    };
    fetchMissions();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Missions</h1>
      <ul className="space-y-4">
        {missions.map((mission) => (
          <li key={mission.mission_id} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">{mission.mission_name}</h2>
            <p className="text-grey-600">{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;