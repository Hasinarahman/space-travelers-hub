import { useSelector } from "react-redux";

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rocket);
  const reservedName = rocketData.filter((rocket) => rocket.reserved);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Reserved Rockets</h2>
        {reservedName.length > 0 ? (
          <ul className="space-y-4">
            {reservedName.map((rocket) => (
              <li
                key={rocket.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-4"
              >
                <span className="text-lg font-medium">{rocket.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reserved rockets.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;