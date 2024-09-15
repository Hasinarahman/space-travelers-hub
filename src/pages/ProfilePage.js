import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.missions.filter((mission) => mission.joined));

  return (
    <div>
      <h2>My Profile</h2>
    
      <section>
        <h3>My Rockets</h3>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>My Missions</h3>
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
