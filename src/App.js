import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatient from './Components/AllPatients/AllPatient';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import DashboardAppoinments from './Components/Dashboard/DashboardAppointments/DashboardAppoinments';

export const UserContext = createContext()


function App() {

  const [loggedIndUser, setLoggedIndUser] = useState({});




  return (
    <UserContext.Provider value={[loggedIndUser, setLoggedIndUser]}>
      <Router>
        <Switch>
          <Route exact path="/">

            < Home ></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/appointment">
            <Appointment></Appointment>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </PrivetRoute>
          <PrivetRoute path="/doctor/patients">
            <AllPatient></AllPatient>
          </PrivetRoute>
          <PrivetRoute path="/doctor/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivetRoute>
          <PrivetRoute path="/doctor/appointment">
          <DashboardAppoinments></DashboardAppoinments>
          </PrivetRoute>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
