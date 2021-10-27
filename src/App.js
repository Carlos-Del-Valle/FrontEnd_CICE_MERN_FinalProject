import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Todos from './components/todos/Todos'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/navBar/NavBar'

const App = () => {
  return (
      <>
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/" component={Todos}/> /* Dear: Carlos from the future dont forget the "exact" here or use the switch component */
                </Switch>
        </BrowserRouter>
      </>
  )
}

export default App;
