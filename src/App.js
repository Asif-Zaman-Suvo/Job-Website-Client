import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondHeader from './Components/SecondHeader/SecondHeader';
import JobUi from './Components/JobUI/JobUI';
import OpenAccountPage from './Components/OpenAccountPage/OpenAccountPage';
import JobSeekerAccount from './Components/JobSeekerAccount/JobSeekerAccount';
import EmployeeAccount from './Components/EmployeeAccount/EmployeeAccount';
import EmployeeAccountInfo from './Components/EmployeeAccountInfo/EmployeeAccountInfo';
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Components/Payment/Payment';
import PostJob from './Components/PostJob/PostJob';
import { createContext, useState } from 'react';
import ProtectedRoute from './Components/Login/ProtectedRoute';
import Login from './Components/Login/Login';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>

            <SecondHeader></SecondHeader>
            <JobUi></JobUi>

          </Route>

          <Route path='/accountOpen'>
            <OpenAccountPage></OpenAccountPage>

          </Route>

          <ProtectedRoute path='/jobSeekerAccount'>
            <JobSeekerAccount></JobSeekerAccount>

          </ProtectedRoute>

          <ProtectedRoute path='/employeeAccount'>
            <EmployeeAccount></EmployeeAccount>

          </ProtectedRoute>

          <Route path='/accountInfo'>
            <EmployeeAccountInfo></EmployeeAccountInfo>

          </Route>

          <Route path='/payment'>
            <Payment></Payment>

          </Route>

          <Route path='/employeeDashboard'>
            <EmployeeDashboard></EmployeeDashboard>

          </Route>

          <Route path='/addJob'>
            <PostJob></PostJob>


          </Route>

          <Route path='/login'>
            <Login></Login>
            
            </Route> 


        </Switch>

      </Router>
    </UserContext.Provider>

  );
}

export default App;
