import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './Components/Missions';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/missions" element={<Missions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
