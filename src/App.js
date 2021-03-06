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
import Dashboard from './component/Dashboard/Dashboard';
import MyAppointment from './component/Dashboard/MyAppointment';
import MyReview from './component/Dashboard/MyReview';
import MyHistory from './component/Dashboard/MyHistory';
import Users from './component/Dashboard/Users';
import RequireAdmin from './component/RequireAdmin/RequireAdmin';
import AddDoctor from './component/Dashboard/AddDoctor';
import ManageDoctor from './component/Dashboard/ManageDoctor';

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
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route path="addDoctor" element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route path="manageDoctor" element={
              <RequireAdmin>
                <ManageDoctor />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
