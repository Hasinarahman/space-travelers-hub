import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const RocketItem = ({
  id,
  name,
  description,
  images,
  reserved
}) => {
  const dispatch = useDispatch();

  const handleButton = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img
        src={images}
        alt="rocket"
        className="h-50 w-full object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      {reserved ? (
        <p className="text-green-500 font-semibold mb-4">Reserved</p>
      ) : (
        <p className="text-gray-500 font-semibold mb-4">Not Reserved</p>
      )}

      <button
        type="submit"
        onClick={() => handleButton(id)}
        className={`px-4 py-2 rounded font-semibold ${
          reserved
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {reserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
    </div>
  );
};

// Define propTypes outside the component
RocketItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired, // Fixed prop name consistency
  reserved: PropTypes.bool,
};

// Define default props
RocketItem.defaultProps = {
  reserved: false,
};

export default RocketItem;
