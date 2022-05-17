import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './component/Appointment/Appointment';
import Home from './component/home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Header from './component/shared/Header';
 import { ToastContainer } from "react-toastify";
   import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
