import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const Rocket = () => {
  const { rocketData, loading, error } = useSelector((state) => state.rocket);

  return (
    <div className="container mx-auto p-6 w-50px">

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error! Unable to load data.</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {rocketData.map((rocket) => (
            <RocketItem
              key={rocket?.id}
              id={rocket?.id}
              name={rocket?.name}
              images={rocket?.images}
              description={rocket?.description}
              type={rocket?.type}
              reserved={rocket?.reserved}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rocket;
