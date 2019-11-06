import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sigin from './components/sigin/signin';
import Logn from './components/logn/login';
import Dashboard from './components/dashboard/dasboard';
import history from './history'
// import Forms from './components/forms';
// import Dash from './components/dash';
import Weathers from './components/weathers/weather';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
        {/* <Route path ="/Forms" exact component ={Forms} /> */}
          <Route path ="/Sigin" exact component ={Sigin} />
          <Route path ="/Logn" exact component ={Logn} />
          <Route path ="/Weathers" exact component ={Weathers} />
          <Route path ="/Dashboard" exact component ={Dashboard} />
        </Switch>
      </Router>
      {/* <Weather /> */}

      {/* <Dash /> */}
      {/* <Link to={{pathname:'/login'}}>Login</Link> */}
      {/* <Dasboard /> */}
      {/* <Signin /> */}
        {/* <Login /> */}
        {/* <Forms /> */}
      
    </div>
  );
}

export default App;
