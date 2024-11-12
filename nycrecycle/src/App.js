import NavBar from './Components/NavBar'
import './App.css';
import HomePage from './Components/HomePage';
import RecyclablesPage from './Components/RecyclablesPage';
import ElectronicsPage from './Components/ElectronicsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <Logo/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecyclablesPage" element={<RecyclablesPage />} />
        <Route path="/ElectronicsPage" element={<ElectronicsPage />} />
      </Routes>


    </div>
  );
}

export default App;
