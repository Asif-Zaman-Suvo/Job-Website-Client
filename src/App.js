import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondHeader from './Components/SecondHeader/SecondHeader';
import JobUi from './Components/JobUI/JobUI';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          
          <SecondHeader></SecondHeader>
          <JobUi></JobUi>

        </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
