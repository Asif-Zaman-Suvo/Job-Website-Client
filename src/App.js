import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondHeader from './Components/SecondHeader/SecondHeader';
import JobUi from './Components/JobUI/JobUI';
import OpenAccountPage from './Components/OpenAccountPage/OpenAccountPage';
import JobSeekerAccount from './Components/JobSeekerAccount/JobSeekerAccount';
import EmployeeAccount from './Components/EmployeeAccount/EmployeeAccount';
import EmployeeAccountInfo from './Components/EmployeeAccountInfo/EmployeeAccountInfo';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          
          <SecondHeader></SecondHeader>
          <JobUi></JobUi>

        </Route>

        <Route  path='/accountOpen'>
        <OpenAccountPage></OpenAccountPage>

        </Route>

        <Route path='/jobSeekerAccount'>
          <JobSeekerAccount></JobSeekerAccount>

        </Route>

        <Route path='/employeeAccount'>
          <EmployeeAccount></EmployeeAccount>

        </Route>

        <Route path='/accountInfo'>
          <EmployeeAccountInfo></EmployeeAccountInfo>

        </Route>

        <Route path='/payment'>
          <Payment></Payment>

        </Route>

       
      </Switch>

    </Router>
    
  );
}

export default App;
