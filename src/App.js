import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profil from './pages/profil/Profil';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/profil" Component={Profil}></Route>
    </Routes>
  );
}

export default App;
