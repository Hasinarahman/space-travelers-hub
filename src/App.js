import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/NavBar';
import Rocket from './components/Rocket';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { getDataFromServer } from './redux/rockets/rocketsSlice';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default App;
