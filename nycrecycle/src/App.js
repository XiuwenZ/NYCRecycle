

import NavBar from './Components/NavBar'
import './App.css';
import HomePage from './Components/HomePage';
import CategoriesPage from './Components/CategoriesPage';
import { Routes, Route } from 'react-router-dom';

function App() {


  
  return (
    <div className="App">

      {/* <Logo/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CategoriesPage" element={<CategoriesPage />} />
      </Routes>


    </div>
  );
}

export default App;
