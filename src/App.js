import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import Login from "./pages/Login/Login";
import PhoneVerify from "./pages/Phone-Verify/index";
import OTPVerify from "./pages/Otp-Verify/index";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from "./pages/Registration/index";
import Address from "./pages/Address/index";
import ProfileSetup from "./pages/Profile-Setup/index";
import ProfileSetupPic  from "./pages/Profile-Setup-Pic/index";
import Subscription from "./pages/Subscription/index";
import Home from "./pages/Home/index";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
          <Route component={Registration} path="/reg"></Route>
          <Route component={PhoneVerify} path="/ver"></Route>
          <Route component={OTPVerify} path="/otp"></Route>
          <Route component={Address} path="/address"></Route>
          <Route component={ProfileSetup} path="/profile-setup"></Route>
          <Route component={ProfileSetupPic} path="/profile-setup-pic"></Route>
          <Route component={Subscription} path="/sub"></Route>
          <Route component={Home} path="/home"></Route>
          <Route component={Login} path="/"></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
