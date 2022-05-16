import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './component/Appointment/Appointment';
import Home from './component/home/Home';
import Login from './component/Login/Login';
import Header from './component/shared/Header';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="appointment" element={<Appointment />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
