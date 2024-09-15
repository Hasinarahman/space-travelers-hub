import './App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Rocket from './components/Rocket';
import Missions from './components/Missions';
import Dragon from './components/Dragon';
import MyProfile from './components/MyProfile';
import { getDataFromServer } from './redux/rockets/rocketsSlice';
import '../src/index.css'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromServer())
  },[dispatch])
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path='/' element = {<Rocket />} />
        <Route path='Missions' element = {<Missions />} />
        <Route  path='Dragons' element = {<Dragon />} />
        <Route path='myprofile' element = {<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;