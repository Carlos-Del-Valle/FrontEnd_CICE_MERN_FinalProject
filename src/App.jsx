import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


// Components

import Header from "./components/Header"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {
  return (
      <div>
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
        </Router>

      </div>
  );
}

export default App;
